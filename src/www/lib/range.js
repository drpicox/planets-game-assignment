const ranges = {};

function range(n) {
  let result = ranges[n];
  if (!result) {
    result = [];
    for (let i = 0; i < n; i += 1) result.push(i);
    ranges[n] = result;
  }
  return result;
}

export default range;
