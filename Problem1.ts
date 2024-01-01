var nums: number[] = [-17, -8, -6, -3, -2, -1, 0, 1, 5, 8]
var posNums: number = 0
var negNums: number = 0

for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        posNums++
    } else if (nums[i] < 0) {
        negNums++
    }    
}

var max = Math.max(posNums, negNums)

console.log(max)