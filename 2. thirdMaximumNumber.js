const arr = [3,2,2,4,5,6]

var thirdMax = function(nums) {
    const uniqDictionary = {}
    for (let i = 0; i < nums.length; i++) {
        if(!uniqDictionary[nums[i]]){
            uniqDictionary[nums[i]] = nums[i]
        }
    }

    const uniqValues = Object.values(uniqDictionary)

    for (let i = 0; i < uniqValues.length; i++) {
        for (let j = 0; j < uniqValues.length; j++) {
            if(uniqValues[j] > uniqValues[j + 1]){
                [uniqValues[j], uniqValues[j + 1]] = [uniqValues[j + 1], uniqValues[j]]
            }
        }
    }
    if(uniqValues.length < 3){
      return uniqValues[uniqValues.length - 1]
    }
    return uniqValues[uniqValues.length - 3]
};

console.log(thirdMax(arr));