// https://leetcode.com/problems/find-center-of-star-graph/

var findCenter = function(edges) {
    const obj = {}

    for(let i = 0; i<edges.length;i++){
        if(!obj[edges[i][0]]){
            obj[edges[i][0]] = 1
        } else {
            obj[edges[i][0]] = obj[edges[i][0]] + 1
        }

        if(!obj[edges[i][1]]){
            obj[edges[i][1]] = 1
        } else {
            obj[edges[i][1]] = obj[edges[i][1]] + 1
        }
    }
    let max = 0
    Object.keys(obj).forEach(key => {
        if(Number(obj[key]) > max){
            max = Number(key)
        }
    })
    return max

    // const [[a,b], [c,d]] = edges
    // return a === c || b === c ? c : d
};