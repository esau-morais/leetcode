import { cancel, intro, isCancel, outro, spinner } from "@clack/prompts";
import { LeetCode } from "leetcode-query";
import { textSync } from "figlet";
import { Command } from "commander";
import { langExtensions } from "./utils/langs";

const program = new Command();
program.requiredOption("-s, --slug <slug>", "problem slug");
program.option("-l, --lang <lang>", "code snippet language");
program.parse(Bun.argv);
const options = program.opts();

type Lang = typeof langExtensions;
type LangSlug = keyof Lang;

const generateProblemFile = async () => {
  try {
    const slug = options.slug;

    if (slug) {
      const leetcode = new LeetCode();

      console.clear();

      intro(textSync("LeetCode"));

      const problem = await leetcode.problem(slug);
      const problemDetails = problem.codeSnippets
        .filter(
          (snippet) =>
            snippet.langSlug &&
            snippet.langSlug === (options.lang || "typescript"),
        )
        .map((snippet) => ({
          code: snippet.code,
          langExt: langExtensions[snippet.langSlug as LangSlug],
        }))[0];

      const s = spinner();

      s.start();
      const problemFile = Bun.file(
        `./src/solutions/${slug}.${problemDetails.langExt}`,
      );
      await Bun.write(problemFile, problemDetails.code);
      const problemTestFile = Bun.file(
        `./src/solutions/${slug}.spec.${problemDetails.langExt}`,
      );
      const problemTestTemplate = `
import { describe, expect, test } from "bun:test";

describe("cases", () => {
  test("case 1", () => {
  });
});
`;
      await Bun.write(problemTestFile, problemTestTemplate);
      s.stop();

      if (isCancel(slug)) {
        cancel("Operation cancelled.");
        process.exit(0);
      }

      outro(
        problem
          ? "🎉 File generated successfully!"
          : "❌ Error on file generation",
      );
      process.exit(problem ? 0 : 1);
    }
  } catch (err) {
    cancel(`Something went wrong: ${err}`);
    process.exit(1);
  }
};

generateProblemFile().catch(console.error);
