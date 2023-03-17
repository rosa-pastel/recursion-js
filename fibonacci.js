function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let fibNum;
    if (i <= 1) {
      fibNum = i;
    } else {
      fibNum = arr[i - 1] + arr[i - 2];
    }
    arr.push(fibNum);
  }
  return arr;
}

function fibsRec(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let arr = fibsRec(num - 1);
    return arr.concat([arr[num - 2] + arr[num - 3]]);
  }
}

console.log(fibsRec(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
