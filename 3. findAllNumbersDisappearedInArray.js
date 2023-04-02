const arr = [4,3,2,7,8,2,3,1]

var findDisappearedNumbers = function(nums) {
    const disappearedValues = []
    const uniqValues = new Set([...nums])

    for (let i = 1; i <= nums.length; i++) {
        if(!uniqValues.has(i)){
            disappearedValues.push(i)
        }
    }
    return disappearedValues
};

console.log(findDisappearedNumbers(arr));