### 给定两个排序的整数数组nums1和nums2，将nums2合并为nums1作为一个排序的数组。

注意：

* 在nums1和nums2中初始化的元素数分别为m和n。
* 您可以假设nums1有足够的空间（大小大于或等于m + n）来保存nums2中的其他元素

例：

> 输入：
nums1 = [1,2,3,0,0,0]，m = 3
nums2 = [2,5,6]，n = 3
产出：  [1,2,2,3,5,6]



```思路```
这道题目其实和基本排序算法中的merge sort非常像，但是 merge sort 很多时候，合并的时候我们通常是 新建一个数组，这样就很简单。 但是这道题目要求的是原地修改.

这就和 merge sort 的 merge 过程有点不同，我们先来回顾一下 merge sort 的 merge 过程。

merge 的过程可以是先比较两个数组的头元素，然后将较小的推到最终的数组中，并将其从原数组中出队列。 循环直到两个数组都为空。

具体代码如下：

```js
// 将nums1 和 nums2 合并
function merge(nums1, nums2) {
  let ret = [];
  while (nums1.length || nums2.length) {
    // 为了方便大家理解，这里代码有点赘余
    if (nums1.length === 0) {
      ret.push(nums2.shift());
      continue;
    }

    if (nums2.length === 0) {
      ret.push(nums1.shift());
      continue;
    }
    const a = nums1[0];
    const b = nums2[0];
    if (a > b) {
      ret.push(nums2.shift());
    } else {
      ret.push(nums1.shift());
    }
  }
  return ret;
}

```

这里要求原地修改，其实我们能只要从后往前比较，并从后往前插入即可。

我们需要三个指针：

1. current 用于记录当前填补到那个位置了

2. m 用于记录 nums1 数组处理到哪个元素了

3. n 用于记录 nums2 数组处理到哪个元素了

两个数组按序合并（一个while循环 三个指针）

[代码实现](https://github.com/FreemenL/daily-algorithm/blob/master/0609/index.js)

