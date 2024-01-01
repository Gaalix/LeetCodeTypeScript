function TwoSum(nums : number[], target: number) : number[] {
    var result : number[] =  []

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result[0] = i
                result[1] = j
                return result
            }
        }
    }

    result[0] = -1
    result[1] = -1
    return result
} 

var nums : number[] = [-3, 5, -5, 9, 3]
var target: number = -8

var result : number[] = TwoSum(nums, target)

console.log(result)

