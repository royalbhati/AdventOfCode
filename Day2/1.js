const b = ar.split("\n");
let count = 0;
for (let x of b) {
  let p = x.split(":")[0];
  let rU = p.split(" ")[0].split("-")[0];
  let rL = p.split(" ")[0].split("-")[1];
  let t = p.split(" ")[1];
  let pass = x.split(":")[1].trim();
  let h = {};
  h[t] = 0;
  for (let x of pass.split("")) {
    if (x == t) {
      if (h[x]) {
        h[x]++;
      } else {
        h[x] = 1;
      }
    }
  }
  if (h[t] >= rU && h[t] <= rL) {
    count++;
  }
}

console.log("count", count);
