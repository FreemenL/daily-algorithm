const maxPorfit = (prices) => {
  let min = prices[0];
  let profit = 0;
  let length = prices.length;
  for(let i =1; i<length;i++){
    if(prices[i]>prices[i-1]){
      profit = Math.max(profit,prices[i]-min);
    }else{
      min = Math.min(prices[i],min)
    }
  }
  return profit;
}
module.exports = maxPorfit;