// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

let line = '~!+8+*fQO%&(2974)W9~D6X60T5%@1V1961*&+8+!046F#q#+S'

const judgeWord = (tokens) => {
    let upWord = false
    let downWord = false
    let num = false
    let special = false
    tokens.forEach(item => {
        let judge = item.charCodeAt()
        if (judge >= 97 && judge <= 122) {
            downWord = true
        } else if (judge >= 65 && judge <= 90) {
            upWord = true
        } else if (judge >= 48 && judge <= 57) {
            num = true
        } else if ((judge >= 33 && judge <= 47) ||
            (judge >= 58 && judge <= 64) ||
            (judge >= 123 && judge <= 126)) {
            special = true
        }
    })
    let arr = [downWord, upWord, num, special]
    arr = arr.filter(item => item)
    if (arr.length >= 3) {
        return true
    } else {
        return false
    }
}

const repeatWrod = (line) => {
    let len = line.length;
    for (let i = 0; i < len - 1; i++) {
        let code = line.slice(i, i + 2)
        if (code.toUpperCase() != code.toLowerCase() &&
            line.split(code).length > 2) {
            console.log(code, line.split(code))
            return false
        }
    }
    return true
}

function main() {
    // Write your code here
    if (line) {
        let tokens = line.split('');
        let flag1 = false
        let flag2 = false
        let flag3 = false

        if (tokens.length >= 8) {
            flag1 = true
        }
        flag2 = judgeWord(tokens)
        flag3 = repeatWrod(line)

        console.log(flag1, flag2, flag3)
        if (flag1 && flag2 && flag3) {
            console.log('OK')
        } else {
            console.log('NG')
        }
    }
}

main()
