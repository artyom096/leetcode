// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let res = []

    for(let i = 0; i < words.length; i++){
        let word = ''
        for(let j = 0; j < words[i].length; j++){
            const idx = alp.findIndex(w => w === words[i][j])
            word+=dict[idx]
        }
        res.push(word)
    }
    return new Set(res).size
};