var twoSum = function (nums, target) {
    // const result = []
    // for (let i = 0; i < nums.length; i++) {
    //         const newArr = nums.filter((num, index) =>  index !== i)
    //     for (let j = 0; j < newArr.length; j++) {
    //         if (nums[i] + newArr[j] === target) {
    //             result.push(i)
    //         }
    //     }
    // }
    // return result

    let prevMap = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(prevMap[diff] !== undefined) {
            return [prevMap[diff], i]
        }
        prevMap[nums[i]] = i
    }
};

console.log(twoSum([3, 2, 3], 5))