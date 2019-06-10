### 给定一个二叉树,找到它的最大深度

```思路```

由于树是一种递归的数据结构，因此用递归去解决的时候往往非常容易，这道题恰巧也是如此， 用递归实现的代码如下:

```js
var maxDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

```

如果使用迭代呢？ 我们首先应该想到的是树的各种遍历，由于我们求的是深度，因此 使用层次遍历（BFS）是非常合适的。 我们只需要记录有多少层即可

```关键点解析```
* 队列

* 队列中用 Null(一个特殊元素)来划分每层， 如果当前拿出来的（shift）的是普通元素 就看他有无left 或者right 叶子节点，若果有的话再加到队列末尾 ，每遇到一个null 就+1 然后把数组末尾再加一个null ；直到队列里面只剩一个null ；

* 树的基本操作- 遍历 - 层次遍历（BFS）



[代码实现](https://github.com/FreemenL/daily-algorithm/blob/master/0610/index.js)

