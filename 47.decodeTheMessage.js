// https://leetcode.com/problems/decode-the-message/

var decodeMessage = function(key, message) {
    let res = ''
    const x = [...new Set(key.split(' ').join('').split(''))]
    const alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    for(let i = 0; i < message.length; i++){
        const idx = x.findIndex(j => j === message[i])
        if(idx > -1){
            res+=alp[idx]
        } else {
            res+= ' '
        }
    }
    return res
};