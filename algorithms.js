/**
 * 1. 
 */


/**
 * 2. Inventory Update
 * 
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

 function updateInventory(arr1, arr2) {
    let inventory = arr1

    for(let i = 0; i<arr2.length; i++){
        for(let j=0; j<inventory.length; j++){
            if(arr2[i][1] === inventory[j][1]){
                inventory[j][0] += arr2[i][0]
                arr2.splice(i, 1)
            }
        }
        inventory.push(arr2[i])
    }

    function sortAlpha(a, b) {
        if (a[1] === b[1]){
            return 0
        } else {
            return (a[1] < b[1]) ? -1 : 1
        }
    }

    inventory.sort(sortAlpha)
    
    return inventory;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])