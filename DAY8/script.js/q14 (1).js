// 3. Remove duplicates
let dup = [1, 2, 2, 3, 4, 4, 5];
console.log(dup.filter((v, i, a) => a.indexOf(v) === i));