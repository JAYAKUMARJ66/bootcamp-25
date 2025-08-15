// 2. Skip negative numbers
let nums = [1, -2, 3, -4, 5];
let positives = [];
nums.forEach(n => { if (n >= 0) positives.push(n); });
console.log(positives); // [1, 3, 5]