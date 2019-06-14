### 题目：最佳买卖时机II

假设您有一个数组，其中第i个元素是第i天给定股票的价格

设计算法以找到最大利润。您可以根据需要完成尽可能多的交易（即，多次买入并卖出一股股票）

注意：您不能同时进行多笔交易（即，您必须在再次购买之前卖出股票）。

```注意```

例1：

Input: [7,1,5,3,6,4]
Output: 7

>说明：在第2天买入（价格= 1）并在第3天买入（价格= 5），利润= 5-1 = 4. 
             然后购买在第4天（价格= 3）并在第5天卖出（价格= 6），利润= 6-3 = 3

例2：
Input: [1,2,3,4,5]
Output: 4

例3: 

Input: [7,6,4,3,1]
Output: 0

```思路```

由于我们是想获取到最大的利润，我们的策略应该是低点买入，高点卖出。

由于题目对于交易次数没有限制，因此只要能够赚钱的机会我们都不应该放过。

用图表示的话就是这样

>如下图，我们只需要求出加粗部分的总和即可
<img src="https://raw.githubusercontent.com/azl397985856/leetcode/master/assets/problems/122.best-time-to-buy-and-sell-stock-ii.png" />


[代码实现](https://github.com/FreemenL/daily-algorithm/blob/master/0612/index.js)

