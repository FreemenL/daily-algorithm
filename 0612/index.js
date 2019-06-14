const maxProfit = (prices) => {
  let profit = 0;
  let length = prices.length
  for(let i=0;i<length;i++){
    if(prices[i]>prices[i-1]){
      profit += (prices[i] - prices[i - 1]);
    }
  }
  return profit;
}

console.log(maxProfit([1,2,3,4,5]));

console.log(maxProfit([7,6,4,3,1]));

module.exports = maxProfit;