### 题目：

假设您有一个数组，其中第i 个元素是第i天给定股票的价格。

如果您只被允许完成最多一笔交易（即买入并卖出一股股票），请设计一个算法来查找最大利润。

请注意，在购买之前不能出售股票。

```例子```

Input: [7,1,5,3,6,4]
Output: 5

Input: [7,6,4,3,1]
Output: 0

```思路```

由于我们是想获取到最大的利润，我们的策略应该是低点买入，高点卖出。

由于题目对于交易次数有限制，只能交易一次，因此问题的本质其实就是求相邻波峰浪谷的差值的最大值。

用图表示的话就是这样
>如下图，我们只需要求出加粗部分的最大值即可
<img src="https://raw.githubusercontent.com/azl397985856/leetcode/master/assets/problems/121.best-time-to-buy-and-sell-stock.png" />


[代码实现](https://github.com/FreemenL/daily-algorithm/blob/master/0611/index.js)

