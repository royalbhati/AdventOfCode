const input = fileRead.split("\n");
let arr = input.map((el) => parseInt(el));
const target = 2020;
let mulh = new Map();
for (let x of f) {
  mulh.set(x, true);
}
for (let x of f) {
  if (mulh.get(target - x)) {
    console.log("Answer ---->", x * target - x);
  }
}
