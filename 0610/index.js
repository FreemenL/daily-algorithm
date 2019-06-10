// 非递归的方式 记录null 出现的次数
const maxDepth = (root) => {
  if(!root) return 0;
  if(!root.left && !root.right) return 1;

  let depth = 1;
  let queue = [root,null];
  let current = root;

  while((current=queue.shift())!==undefined){
    if(current===null){
      if( queue.length === 0 ) return depth;
      depth++;
      queue.push(null);
      continue;
    }
    let left = current.left;
    let right = current.right;
    if(left) queue.push(left);
    if(right) queue.push(right);
  }
}

module.exports = maxDepth;




