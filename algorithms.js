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
