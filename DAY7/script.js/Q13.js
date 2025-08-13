
let N = parseInt(prompt("Enter how many numbers you want to input:"));


let smallest = parseFloat(prompt("Enter number 1:"));

for (let i = 2; i <= N; i++) {
  let num = parseFloat(prompt(`Enter number ${i}:`));
  if (num < smallest) {
    smallest = num;
  }
}


console.log(`The smallest number is: ${smallest}`);
