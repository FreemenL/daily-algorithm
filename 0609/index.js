const merge = (nums1,m,nums2,n) =>{
   let current = nums1.length-1;
   while(current>=0){
       if(n<0) break;
       if(nums1[m-1]<nums2[n-1]){
         nums1[current--] = nums2[--n];
       }else{
         nums1[current--] = nums1[--m];
       }
   }
   return nums1;
}

module.exports = merge;



