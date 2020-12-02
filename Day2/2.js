const b = ar.split("\n");

let count = 0;
console.log("count", count);
for (let x of b) {
  let p = x.split(":")[0];
  let rU = p.split(" ")[0].split("-")[0];
  let rL = p.split(" ")[0].split("-")[1];
  let t = p.split(" ")[1];
  let pass = x.split(":")[1].trim();
  let h = {};
  h[t] = [];
  let split = pass.split("");

  for (let x = 0; x < split.length; x++) {
    if (split[x] == t && (x == rL - 1 || x == rU - 1)) {
      if (h[split[x]]) {
        h[split[x]] = [...h[split[x]], x];
      } else {
        h[split[x]] = [];
      }
    }
  }

  if (h[t].indexOf(rL - 1) != -1 && h[t].indexOf(rU - 1) != -1) {
    count++;
  } else if (h[t].indexOf(rL - 1) == -1 && h[t].indexOf(rU - 1) == -1) {
    count++;
  }
}

console.log("count", 1000 - count);
