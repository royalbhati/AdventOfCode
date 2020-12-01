let triplet = [];
arr.sort((a, b) => a - b);

//we go till arr.length-2 beacuse we need two other values for i and j pointer as we need triplets
for (let x = 0; x < arr.length - 2; x++) {
  if (x > 0 && arr[x] === arr[x - 1]) continue;

  let l = x + 1;
  let r = arr.length - 1;
  console.log("init", arr[x], arr[l], arr[r]);

  while (l < r) {
    let cs = arr[x] + arr[l] + arr[r];
    if (cs > 2020) {
      --r;
    } else if (cs < 2020) {
      ++l;
    } else {
      triplet.push([arr[x], arr[l], arr[r]]);
      do {
        ++l;
      } while (l < r && arr[l] === arr[l - 1]);
      do {
        --r;
      } while (l < r && arr[r] === arr[r + 1]);
    }
  }
}

ans = triplet.reduce((acc, val) => acc * val);

console.log("Answer", ans);
