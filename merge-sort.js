function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
    let merged = [];
    while (left[0] !== undefined || right[0] !== undefined) {
      if (left[0] === undefined) {
        merged.push(...right);
        break;
      }
      if (right[0] === undefined) {
        merged.push(...left);
        break;
      }
      if (left[0] < right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }
    return merged;
  }
}
console.log(mergeSort([12, 3, 10, 1, 13, 4, 6, 11, 2, 9, 5, 0, 7, 8, -20])); //[-20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
