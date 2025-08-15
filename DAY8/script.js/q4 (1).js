// 4. Increment elements
let arr = [1, 2, 3];
arr.forEach((n, i, a) => a[i] = n + 1);
console.log(arr); // [2, 3, 4]