const removeDuplicates = (nums) =>{
    let slowP = 0;
    let length = nums.length;
    for( let fastP = 0; fastP<length; fastP++){
        if(nums[fastP]!==nums[slowP]){
            slowP++;
            nums[slowP] = nums[fastP];
        }
    }
    let resLength = slowP+1
    nums.length = resLength;
    return resLength;
}

module.exports = removeDuplicates;


