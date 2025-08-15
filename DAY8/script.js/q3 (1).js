// 3. Change grade property
let students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];
students.forEach(s => s.grade = "A+");
console.log(students);