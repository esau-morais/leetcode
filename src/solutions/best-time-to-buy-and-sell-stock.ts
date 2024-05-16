// O(n)
export function maxProfit(prices: number[]): number {
  let buy = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[buy]) {
      if (prices[i] - prices[buy] > maxProfit)
        maxProfit = prices[i] - prices[buy];
    } else {
      buy = i;
    }
  }

  return maxProfit;
}
