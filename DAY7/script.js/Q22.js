
let n = parseInt(prompt("How many Lines?"));
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }
  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}
