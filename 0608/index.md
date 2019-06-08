### 数组去重 不创建新的数组

给定排序的数组nums，就地删除重复项，使每个元素只出现一次并返回新的长度。

不要为另一个数组分配额外的空间，必须通过使用O（1）额外内存修改输入数组来实现此目的。

例1：

鉴于nums = [1,1,2]，

你的函数应返回length = 2，nums的前两个元素分别为1和2。

你返回的长度超出了什么并不重要。例2：

鉴于nums = [0,0,1,1,1,2,2,3,3,4]，

你的函数应该返回length = 5，将nums的前五个元素分别修改为0,1,2,3和4。

设置超出返回长度的值无关紧要。澄清：

混淆为什么返回值是一个整数但你的答案是一个数组？

请注意，输入数组是通过引用传入的，这意味着调用者也可以知道对输入数组的修改。

在内部你可以想到这个：

```js
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

```思路：```
使用快慢指针来记录遍历的坐标。

* 开始时这两个指针都指向第一个数字

* 如果两个指针指的数字相同，则快指针向前走一步

* 如果不同，则两个指针都向前走一步

* 当快指针走完整个数组后，慢指针当前的坐标加1就是数组中不同数字的个数

[代码实现](https://github.com/FreemenL/daily-algorithm/blob/master/0608/index.js)

