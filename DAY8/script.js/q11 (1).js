// 6. Incremental arrays
let counts = [2, 4, 3, 5];
console.log(counts.map(n => Array.from({length: n}, (_, i) => i + 1)));