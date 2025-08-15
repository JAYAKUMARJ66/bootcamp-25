// 3. Sum of subarrays
let subArrs = [[1, 2, 3], [4, 5], [6, 7, 8]];
console.log(subArrs.map(a => a.reduce((x, y) => x + y, 0)));
