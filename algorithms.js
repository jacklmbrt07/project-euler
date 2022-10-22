/**
 * 1.
 */

/**
 * 2. Inventory Update
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
  let inventory = arr1;

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < inventory.length; j++) {
      if (arr2[i][1] === inventory[j][1]) {
        inventory[j][0] += arr2[i][0];
        arr2.splice(i, 1);
      }
    }
    inventory.push(arr2[i]);
  }

  function sortAlpha(a, b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  }

  inventory.sort(sortAlpha);

  return inventory;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);

/**3. No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating. */

function permAlone(str) {
  let strArr = [...str];
  let count = 0;

  const getPermutations = (arr) => {
    const output = [];

    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };

    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }

      generate(n - 1, heapArr);

      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }

        generate(n - 1, heapArr);
      }
    };

    generate(arr.length, arr.slice());

    return output;
  };

  const perms = getPermutations(strArr);

  for (const perm of perms) {
    let regex = /(.)\1+/.test(perm.join(""));

    if (!regex) {
      count++;
    }
  }

  return count;
}

permAlone("aab");

/**4. Pairwise
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6 */

function pairwise(arr, arg) {
  let arrCopy = arr;
  let indicesArr = [];
  let index = 0;

  while (arrCopy.length != 0) {
    for (let i = 1; i < arrCopy.length; i++) {
      if (
        arrCopy[0] + arrCopy[i] === arg &&
        !indicesArr.includes(index) &&
        !indicesArr.includes(index + i)
      ) {
        indicesArr.push(index);
        indicesArr.push(index + i);
      }
    }

    arrCopy.shift();

    index++;
  }

  function add(acc, a) {
    return acc + a;
  }

  const sum = indicesArr.reduce(add, 0);

  return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);

/**5. Implement Bubble Sort
This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(
  bubbleSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);

/**6. Implement Selection Sort
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. */

function selectionSort(array) {
  let minIndex;

  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

console.log(
  selectionSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
