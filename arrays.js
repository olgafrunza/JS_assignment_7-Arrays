//Assignment 1
function joinStr(arr) {
  return arr.join(",");
}
console.log(joinStr(["Red", "Green", "White", "Black"]));

Assignment 2
function sortItems(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortItems([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

//Assignment 3

function mostFrequent(arr) {
  let count = 0;
  let maxCount = 0;
  let element;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++;
      if (count > maxCount) {
        maxCount = count;
        element = arr[i];
      }
    }
    count = 0;
  }

  return `${element} is repeated most`;
}
console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

//Assignment 4
function isSumK(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] <= k) return true;
    }
    return false;
  }
}
console.log(isSumK([10, 15, 3, 7], 17));
