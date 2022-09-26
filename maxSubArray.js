/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = Number.MIN_SAFE_INTEGER; // -9007199254740991
    let sum = 0;
    // loop the array
    nums.map ((n, i) => {
        sum += n //add it to sum variable
        result = Math.max(sum, result); // compare the max between result and sum and assign max
        sum = sum < 0 ? 0 : sum; // check sum if it less than zero
    })
    return result
};
