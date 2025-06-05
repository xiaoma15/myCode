// // // // const { memoryUsage } = require('node:process');
// // // // console.log(memoryUsage());

// // // function judgeStr(str) {
// // //     let a = /^[A,W,S,D]{1}0{0,1}[1-9]{1}$/
// // //     let b = /^[A,W,S,D]{1}[1-9]{1}\d{1}$/

// // //     if (a.test(str) || b.test(str)) {
// // //         return true
// // //     }
// // //     return false
// // // }

// // // function computerStep(opsition, str) {
// // //     let direction = str.slice(0, 1)
// // //     let step = parseInt(str.slice(1, str.length))

// // //     if (direction == 'A') {
// // //         opsition.x -= step
// // //     } else if (direction == 'W') {
// // //         opsition.y += step
// // //     } else if (direction == 'S') {
// // //         opsition.y -= step
// // //     } else if (direction == 'D') {
// // //         opsition.x += step
// // //     }
// // //     console.log(direction, step, opsition);
// // //     return opsition
// // // }

// // // function getRes(opsition, str) {
// // //     let strArr = str.split(';');
// // //     strArr = strArr.filter(item => item && judgeStr(item))
// // //     if (strArr.length == 0) {
// // //         return "0,0"
// // //     } else {
// // //         strArr.forEach(element => {
// // //             computerStep(opsition, element)
// // //         });
// // //     }
// // //     return opsition.x + ',' + opsition.y
// // // }

// // // let stepStr = 'S87;S7;W56;S75;A8;S84;W23;W19;W40;D73;S87;A39;W97;W78;A53;D16;D15;A50;W41;S87;D47;W56;D56;A23;A91;S25;D61;D53;D58;W88;W58;S61;D69;W74;D89;A92;D39;D62;S78;W72;W73;W35;S76;W35;S36;W39;A4;'
// // // let opsition = { x: 0, y: 0 }
// // // console.log(getRes(opsition, stepStr));

// // // let testArr = [
// // //     'dab', 'dab', 'bda',
// // //     'dba', 'dba', 'dba',
// // //     'adb', 'dab', 'dba',
// // //     'bda', 'adb', 'bda'
// // // ]

// // // console.log('a'.charCodeAt(), 'b'.charCodeAt())

// // // const compare = (str1, str2) => {
// // //     const str1Arr = str1.split("");
// // //     const str2Arr = str2.split("");
// // //     const len1 = str1Arr.length;
// // //     const len2 = str2Arr.length;
// // //     const minLen = Math.min(len1, len2);
// // //     for (let i = 0; i < minLen; i++) {
// // //         const code1 = str1Arr[i].charCodeAt()
// // //         const code2 = str2Arr[i].charCodeAt()
// // //         if (code1 > code2) {
// // //             return 1
// // //         } else if (code1 < code2) {
// // //             return -1
// // //         }
// // //     }

// // //     if (minLen == len1 && minLen !== len2) {
// // //         return -1
// // //     } else {
// // //         return 1
// // //     }
// // // };

// // // console.log(testArr)
// // // testArr = testArr.sort((a, b) => {
// // //     let res = compare(a, b)
// // //     return res
// // // });
// // // console.log(testArr)

// // // const sortStr = (str) => {
// // //     let strArr = str.split("");
// // //     strArr = strArr.sort((a, b) => a.charCodeAt() - b.charCodeAt());
// // //     return strArr.join("");
// // // };

// // // void (async function () {
// // //     // Write your code here
// // //     let line = await readline();
// // //     line = line.split(" ");
// // //     let n = parseInt(line[0]);
// // //     let x = line[line.length - 2];
// // //     let k = parseInt(line[line.length - 1]) - 1;
// // //     let checkArr = line.slice(1, line.length - 2);
// // //     // console.log(n, checkArr, x, k);

// // //     // checkArr = checkArr.sort((a, b) => compare(a, b));

// // //     let brotherArr = [];
// // //     let sortX = sortStr(x);
// // //     checkArr.forEach((item) => {
// // //         if (x !== item && sortStr(item) === sortX) {
// // //             brotherArr.push(item);
// // //         }
// // //     });

// // //     console.log(brotherArr.length);

// // //     if (brotherArr.length) {
// // //         brotherArr = brotherArr.sort((a, b) => compare(a, b));
// // //         if (k < brotherArr.length) {
// // //             console.log(brotherArr[k]);
// // //             if (brotherArr.length == 12) {
// // //                 console.log(k, brotherArr)
// // //             }
// // //         }
// // //     }
// // // })();


// // // 


// // // const aij = (i, j) => {
// // //     let m = Math.max(i, j)
// // //     let arr = [new Array(2 * m + 1), new Array(2 * m + 1)]
// // //     arr[0].fill(0)
// // //     arr[1].fill(0)
// // //     arr[0][m] = 1
// // //     arr[1][m - 1] = 1
// // //     arr[1][m] = 1
// // //     arr[1][m + 1] = 1

// // //     if (i < 1 || j < 1) {
// // //         console.log('-')
// // //         return 0
// // //     }
// // //     else if (i < 3) {
// // //         return arr[i - 1][j - 1]
// // //     } else {
// // //         // i=3,j=2 arr[2][1]
// // //         let left = 0
// // //         let top = aij(i - 2, j - 1)
// // //         let right = 0
// // //         if (j > 1) {
// // //             left = aij(i - 2, j - 2)
// // //         }
// // //         if (j < 2 * i + 1) {
// // //             right = aij(i - 2, j)
// // //         }
// // //         return left + top + right
// // //     }
// // // }

// // // let n = 4

// // // res = aij(3, 1)
// // // console.log(res)
// // // if (n < 3) {
// // //     console.log(-1)
// // // } else {
// // //     let start = 1
// // //     let res = aij(n - 1, start)
// // //     // console.log(res)
// // //     while (res == 0 || res % 2 != 0) {
// // //         console.log(res)
// // //         res = aij(n - 1, ++start)
// // //     }
// // //     console.log(res, start + 1)
// // // }

// // // console.log(obj.b0 + obj.b1 + obj.b2 + obj.b3) 
// // // console.log(obj.b0, obj.b1, obj.b2, obj.b3) 


// // // function getRes(n) {
// // //     let m = n - 1
// // //     let arr1 = new Array(2 * m + 1)
// // //     let arr2 = new Array(2 * m + 1)
// // //     arr1.fill(0)
// // //     arr2.fill(0)
// // //     arr1[m] = 1
// // //     arr2[m] = 1
// // //     arr2[m - 1] = 1
// // //     arr2[m + 1] = 1
// // //     let arr = [arr1, arr2]
// // //     let arr_ = arr[1]

// // //     if (n > 1) {
// // //         for (let i = 2; i < n; i++) {
// // //             let arrTemp = new Array(2 * m - 1)
// // //             arrTemp.fill(0)
// // //             for (let j = 0; j < 2 * m + 1; j++) {
// // //                 let left = 0
// // //                 let right = 0
// // //                 let top = 0
// // //                 if (j > 0) {
// // //                     left = arr_[j - 1]
// // //                 }
// // //                 if (j < 2 * m) {
// // //                     right = arr_[j + 1]
// // //                 }
// // //                 top = arr_[j]
// // //                 arrTemp[j] = left + top + right
// // //             }
// // //             arr_ = [...arrTemp]
// // //         }
// // //     }

// // //     let arrN = arr_
// // //     let res = -1
// // //     for (let i = 0; i < arrN.length; i++) {
// // //         if (arrN[i] % 2 == 0 && arrN[i] != 0) {
// // //             res = i + 1;
// // //             break;
// // //         }
// // //     }
// // //     return res
// // // }

// // // for (let i = 3; i <= 20; i++) {
// // //     console.log(i, getRes(i))
// // // }



// // // void async function () {
// // //     // Write your code here
// // //     const judgeStr = str => {
// // //         const strArr = str.split('')
// // //         for (let i = 0, j = strArr.length - 1; i < j; i++, j--) {
// // //             // console.log(strArr[i], strArr[j])
// // //             if (strArr[i] != strArr[j]) return false
// // //         }
// // //         console.log(str)
// // //         return true
// // //     }
// // //     let s = 'qhbrivaighqmgafhthxicdiixpefhwwefdebwczswqqdjxulhuhceqrxechddtlbbltddhcexrqechuhluxjdqqwszcwenakceymkxfqpqxctbsousrwwhooxjtcqnvb'
// // //     const len = s.length
// // //     for (let i = 0; i < len; i++) {
// // //         for (let j = 0; j < i; j++) {

// // //             let subStr = s.slice(j, len - i + j)

// // //             if (judgeStr(subStr)) {
// // //                 console.log(len - i)
// // //                 return
// // //             }
// // //         }
// // //     }

// // // }()


// // // void (async function () {
// // //     // Write your code here
// // //     const strArr = 'for(inti=12;i<=n;i++)'.split("");
// // //     const getCheck = (strArr) => {
// // //         let obj = {
// // //             len: 0,
// // //             code: 0,
// // //             num: 0,
// // //             sign: 0,
// // //             award: 0,
// // //         };
// // //         const length = strArr.length;
// // //         if (length <= 4) {
// // //             obj.len = 5;
// // //         } else if (length <= 7) {
// // //             obj.len = 10;
// // //         } else {
// // //             obj.len = 25;
// // //         }

// // //         let codeMin = false;
// // //         let codeMax = false;
// // //         let numSum = 0;
// // //         let signSum = 0;
// // //         strArr.forEach((item) => {
// // //             let charCode = item.charCodeAt();
// // //             if ("01234567890".includes(item)) {
// // //                 numSum += 1;
// // //             } else if (
// // //                 !codeMin &&
// // //                 charCode >= "a".charCodeAt() &&
// // //                 charCode <= "z".charCodeAt()
// // //             ) {
// // //                 codeMin = true;
// // //             } else if (
// // //                 !codeMax &&
// // //                 charCode >= "A".charCodeAt() &&
// // //                 charCode <= "Z".charCodeAt()
// // //             ) {
// // //                 codeMax = true;
// // //             } else if (
// // //                 (charCode >= 0x21 && charCode <= 0x2F) ||
// // //                 (charCode >= 0x3A && charCode <= 0x40) ||
// // //                 (charCode >= 0x5B && charCode <= 0x60) ||
// // //                 (charCode >= 0x7B && charCode <= 0x7E)
// // //             ) {
// // //                 signSum += 1
// // //             }
// // //         });

// // //         if (codeMax && codeMin) {
// // //             obj.code = 20
// // //         } else if (codeMax || codeMin) {
// // //             obj.code = 10
// // //         }

// // //         if (numSum == 0) {
// // //             obj.num = 0
// // //         } else if (numSum == 1) {
// // //             obj.num = 10
// // //         } else {
// // //             obj.num = 20
// // //         }

// // //         if (signSum == 0) {
// // //             obj.sign = 0
// // //         } else if (signSum == 1) {
// // //             obj.sign = 10
// // //         } else {
// // //             obj.sign = 25
// // //         }

// // //         if (codeMin && codeMax && obj.num && obj.sign) {
// // //             obj.award = 5
// // //         } else if (obj.num && obj.sign && (codeMin || codeMax)) {
// // //             obj.award = 3
// // //         } else if (obj.num && (codeMin || codeMax)) {
// // //             obj.award = 2
// // //         }
// // //         return obj
// // //     }

// // //     const getComment = score => {
// // //         if (score >= 90) {
// // //             return 'VERY_SECURE'
// // //         } else if (score >= 80) {
// // //             return 'SECURE'
// // //         } else if (score >= 70) {
// // //             return 'VERY_STRONG'
// // //         } else if (score >= 60) {
// // //             return 'STRONG'
// // //         } else if (score >= 50) {
// // //             return 'AVERAGE'
// // //         } else if (score >= 25) {
// // //             return 'WEAK'
// // //         } else if (score >= 0) {
// // //             return 'VERY_WEAK'
// // //         }
// // //     }

// // //     const res = getCheck(strArr)
// // //     console.log(res)
// // //     let score = 0
// // //     for (key in res) {
// // //         score += res[key]
// // //     }
// // //     console.log(getComment(score))

// // // })();

// // const rl = require("readline").createInterface({ input: process.stdin });
// // var iter = rl[Symbol.asyncIterator]();
// // const readline = async () => (await iter.next()).value;

// // void async function () {
// //     // Write your code here
// //     let [n, k, x] = (await readline()).split(' ').map(item => BigInt(item))
// //     const getSum = (start, stop, x) => {
// //         stop = stop / x
// //         if (start % x == 0n) {
// //             start = start / x
// //         } else {
// //             start = start / x + 1n
// //         }
// //         return stop - start + 1n
// //     }

// //     if (n * x - 1n > k) { console.log(-1); return }
// //     let start = 1n
// //     while (start) {
// //         let end = start + k - 1n
// //         let sum = getSum(start, end, x)
// //         console.log(sum)
// //         if (sum == n) {
// //             console.log(start + ' ' + end)
// //             return
// //         } else if (sum < n) {
// //             start = start + 1n
// //         } else {
// //             console.log(-1);
// //             return
// //         }
// //     }

// // }()


// void (async function () {
//     // Write your code here
//     // const t = parseInt(await readline());
//     const t = 1

//     for (let i = 0; i < t; i++) {
//         // let [n, m] = (await readline())
//         //     .split(" ")
//         //     .map((item) => parseInt(item));
//         let [n, m] = [10, 6]
//         if (n <= 3) {
//             n = n - m;
//         } else {
//             let x = Math.ceil(Math.log(n) / Math.log(2) / Math.log(2));
//             console.log("x", x)
//             if (m <= x) {
//                 n = Math.ceil(Math.pow(n, Math.pow(1 / 2, m)));
//             } else {
//                 n = Math.ceil(Math.pow(n, Math.pow(1 / 2, x)));
//                 n = n - (m - x);
//             }
//         }
//         console.log(n);
//     }
// })();

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let [n, m, q] = (await readline()).split(" ").map((item) => parseInt(item));

    let arr_nm = [];
    for (let i = 0; i < n; i++) {
        arr_nm.push((await readline()).slice(0, m));
    }

    let arr_q = [];
    for (let i = 0; i < q; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            let str = await readline();
            temp.push(str);
        }
        arr_q.push([...temp]);
    }

    const combine2Str = (str1, str2) => {
        let str1Arr = str1.split("");
        let str2Arr = str2.split("");
        let res = [];
        str1Arr.forEach((item, idx) => {
            if (item == "1" || str2Arr[idx] == "1") {
                res[idx] = 1;
            } else {
                res[idx] = 0;
            }
        });
        return res.join("");
    };

    const getResArr = (arr_q, idxArr) => {
        let res = [];
        let n = arr_q[idxArr[0]].length;
        for (let i = 0; i < n; i++) {
            res[i] = "0".repeat(n);
            idxArr.forEach((item) => {
                res[i] = combine2Str(res[i], arr_q[item][i]);
            });
        }
        return res;
    };

    const check2Arr = (arr1, arr_nm) => {
        if (arr1.length == 0) {
            return false;
        }
        let len = arr1.length;
        let str = "1".repeat(len);
        for (let i = 0; i < len; i++) {
            if (str != combine2Str(arr1[i], arr_nm[i])) return false;
        }
        return true;
    };

    function nCrCombinations(nums, r) {
        const results = [];
        const backtrack = (start, path) => {
            if (path.length === r) {
                results.push([...path]);
                return;
            }
            for (let i = start; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        };
        backtrack(0, []);
        return results;
    }

    let res_idx = [];
    arr_q.forEach((item, idx) => {
        if (item.length != 0) {
            res_idx.push(idx);
        }
    });

    let len = res_idx.length;
    let num = 1;

    if (arr_nm.every(item => !item.includes('0'))) {
        console.log(0);
        return
    }

    while (num <= len) {
        let idxArr = nCrCombinations(res_idx, num);
        for (let i = 0; i < idxArr.length; i++) {
            let res = getResArr(arr_q, idxArr[i]);
            if (check2Arr(res, arr_nm)) {
                console.log(idxArr[i].length);
                console.log(idxArr[i].map((item) => item + 1).join(" "));
                return;
            }
        }
        num++;
    }
    console.log(-1)

})();

