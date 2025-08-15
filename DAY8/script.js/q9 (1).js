// 4. Timestamps to time
let times = [1630488000000, 1631179200000, 1633708800000];
console.log(times.map(t => new Date(t).toLocaleTimeString()));