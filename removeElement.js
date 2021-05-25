let nums = [1,2,3,2,4,5]
let val = 2


var removeElement = function(nums, val) {
let i = 0
   for(let j =0; j<nums.length; j++){
       if(nums[j] !== val){
           nums[i] = nums[j];
           i++
       }
   }
    return i
};