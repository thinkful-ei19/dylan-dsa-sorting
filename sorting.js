const str = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

const data = str.split(' ').map(str => parseInt(str, 10));

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

let quickCount = 0;

function quickSort(array, start = 0, end = array.length) {

  quickCount++;

  start = start;
  end = end;

  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

let mergeCount = 0;

function mergeSort(array) {

  mergeCount++;

  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {

  // mergeCount++;

  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    // mergeCount++;
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    // mergeCount++;
    array[outputIndex++] = right[i];
  }
  return array;
}

let minPointer = 0;
let maxPointer = 1;

function bucketSort(arr, min = Math.min(...arr), max = Math.max(...arr), temp = []) {

  if (arr.length < 1) {
    return temp;
  }

  temp.splice(minPointer, 0, min);
  temp.splice(maxPointer, 0, max);
  arr.splice(arr.indexOf(min), 1);
  arr.splice(arr.indexOf(max), 1);

  minPointer++;
  maxPointer++;

  min = Math.min(...arr);
  max = Math.max(...arr);

  return bucketSort(arr, min, max, temp);

}

function inPlaceShuffle(arr) {

  for (let i = 0; i < arr.length; i++) {
    let rand = Math.floor(Math.random() * arr.length);
    swap(arr, i, rand);
  }

  return arr;

}

//SORTING BOOKS ALPHABETICALLY
/* 
To sort the book alphabetically, I'd first use a quick sort to sort the books alphabetically
by their first letter. That should take care of most of the work. Then, I'd check if any
of the books had the same first letter. For each set of books with the same first letter,
I'd run a quick sort on their second letter. I'd then have this recursive call over and 
over until none of the nth letters match in books with the same first letter, second letter,
etc. 

let qCount = 0;
function quickSort(array, start=0, end=array.length) {
  qCount++;
  start = start;
  end = end;
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1].title;
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i].title <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}


*/

function main() {
  // console.log(quickSort(data));
  // console.log(quickCount, 'quick sort operations!');
  // console.log(mergeSort(data));
  // console.log(mergeCount, 'merge sort operations!!');
  console.log(bucketSort([3, 2, 1, 5, 4, 9, 0]));
  // console.log(inPlaceShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

main();