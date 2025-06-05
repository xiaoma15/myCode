// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// 1000 5
// 800 2 0
// 400 5 1
// 200 5 1
// 400 3 0
// 500 2 0
const { memoryUsage } = require('node:process');


void (async function () {

    let s = `
8000 20
100 3 0
400 5 0
300 5 0
1400 2 2
500 2 2
800 2 3
1400 5 0
300 5 0
1400 3 0
500 2 0
1800 4 0
440 5 10
1340 5 10
1430 3 0
500 2 0
800 2 0
1400 5 0
300 4 0
400 3 0
500 3 18`

    let money = 0
    let valArr = []
    function doWithStr(s) {
        let sArr = s.trim().split('\n')
        money = sArr[0].split(' ')[0]
        let item = {}
        for (let i = 1; i < sArr.length; i++) {
            let arrItem = sArr[i].split(' ')
            let v = parseInt(arrItem[0])
            let w = parseInt(arrItem[1])
            let q = parseInt(arrItem[2])
            item = { i, v, w, q }
            valArr.push(item)
        }
    }
    doWithStr(s)
    console.log(valArr);

    function dealArr(valArr) {
        let resArr = [];
        for (let i = 0; i < valArr.length; i++) {
            let item = valArr[i];
            let q = item.q;
            if (q === 0) {
                if (resArr[item.i - 1] == undefined) {
                    resArr[item.i - 1] = {};
                }
                if (resArr[item.i - 1].arr == undefined) {
                    resArr[item.i - 1].arr = [];
                }
                resArr[item.i - 1] = { ...resArr[item.i - 1], ...item };
            } else {
                for (let j = 0; j < valArr.length; j++) {
                    let anotherItem = valArr[j];
                    if (anotherItem.i === q) {
                        if (resArr[q - 1] == undefined) {
                            resArr[q - 1] = {};
                        }
                        if (resArr[q - 1].arr == undefined) {
                            resArr[q - 1].arr = [];
                        }
                        resArr[q - 1].arr.push(item);
                    }
                }
            }
        }
        return resArr.filter(item => item.arr);
    };

    function getFinalArr(arr) {
        let finalArr = [];
        arr.forEach((itm, idx) => {
            if (itm && itm.arr) {
                if (itm.arr.length == 0) {
                    let val = {};
                    val.v = itm.v;
                    val.s = itm.v * itm.w;
                    finalArr.push(val);
                } else {
                    let arr = itm.arr;
                    let out_arr = [];
                    let val = {};
                    val.v = itm.v;
                    val.s = itm.v * itm.w;
                    out_arr.push(val);

                    for (let i = 0; i < arr.length; i++) {
                        let firstVal = {};
                        let firstItem = arr[i];
                        firstVal.v = val.v + firstItem.v;
                        firstVal.s = val.s + firstItem.v * firstItem.w;
                        out_arr.push(firstVal);
                        for (let j = i + 1; j < arr.length; j++) {
                            let secondVal = {};
                            let secondItem = arr[j];
                            secondVal.v = firstVal.v + secondItem.v;
                            secondVal.s = firstVal.s + secondItem.v * secondItem.w;
                            out_arr.push(secondVal);
                        }
                    }
                    finalArr.push(out_arr);
                }
            }
        });
        return finalArr
    }

    function pushFn(arr, item, money) {
        if (item.v <= money) {
            arr.push(item)
        }
    }

    function compareList(item1, item2, money) {
        let outArr = [];
        let flag1 = Array.isArray(item1);
        let flag2 = Array.isArray(item2);
        if (!flag1 && !flag2) {
            pushFn(outArr, item1, money)
            pushFn(outArr, item2, money)
            let addItem = {};
            addItem.v = item1.v + item2.v;
            addItem.s = item1.s + item2.s;
            pushFn(outArr, addItem, money)
        } else if (flag1 && flag2) {
            for (let i = 0; i < item1.length; i++) {
                pushFn(outArr, item1[i], money)
                for (let j = 0; j < item2.length; j++) {
                    pushFn(outArr, item2[j], money)
                    let addItem = {};
                    addItem.v = item1[i].v + item2[j].v;
                    addItem.s = item1[i].s + item2[j].s;
                    pushFn(outArr, addItem, money)
                }
            }
        } else {
            if (flag1) {
                let temArr = [...item1];
                item1 = { ...item2 };
                item2 = temArr;
            }
            pushFn(outArr, item1, money)
            for (let i = 0; i < item2.length; i++) {
                pushFn(outArr, { ...item2[i] }, money)
                let addItem = {};
                addItem.v = item1.v + item2[i].v;
                addItem.s = item1.s + item2[i].s;
                pushFn(outArr, addItem, money)
            }
        }
        outArr.sort((a, b) => {
            if (a.v != b.v) {
                return b.v - a.v
            } else {
                return b.s - a.s
            }
        })
        let arrValIdx = []
        let arrOut = []
        outArr.forEach(item => {
            if (arrValIdx.indexOf(item.v) == -1) {
                arrOut.push(item)
                arrValIdx.push(item.v)
            }
        })
        outArr = null;
        return arrOut;
    }

    function getRes(finalArr, money) {
        let finalResArr = finalArr[0]
        for (let i = 1; i < finalArr.length; i++) {
            let secondArr = finalArr[i]
            let arr = compareList(finalResArr, secondArr, money)
            finalResArr = [...arr]
        }
        console.log(finalResArr)
        let res = 0
        finalResArr.forEach(item => {
            if (item.v <= money) {
                if (res < item.s) {
                    res = item.s
                }
            }
        })
        return res
    }
    let arr = dealArr(valArr);
    // console.log(arr)
    let finalArr = getFinalArr(arr)
    let res = getRes(finalArr, money)
    console.log(res);

})();

console.log(memoryUsage());


// {
//     rss: 201703424,
//         heapTotal: 148373504,
//             heapUsed: 122778816,
//                 external: 1450040,
//                     arrayBuffers: 10475
// }
