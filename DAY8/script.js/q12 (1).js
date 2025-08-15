// filter examples
// 1. Remove falsy values
let mixed = [0, "", false, null, undefined, 1, "hello"];
console.log(mixed.filter(Boolean));