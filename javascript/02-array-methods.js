// Array in depth and for loop
// Array Methods

let names = ["Captain America", "Thor", "Spider Man", "Batman", "Iron Man"]
console.log(names);
console.log(names.length); // Gives length of an array
console.log (names[names.length - 1]); // To access last item of an array
names[2] = "Big Guy"; // Will change value at index 2
console.log(names);

// let names1 = new Array("John", "Jane", "Alex"); // Another way to create an array
// console.log(names1)

// names.push("Black Panther"); // PUSH: Adds an elements at end of an array
// console.log(names);


// Slice
// console.log(names.slice(1,3)) // Slice picks up item between range starting from first argument (index) to second parameter index - 1;

// Splice
// It will insert values inside an array
// it takes three things first parameter (index to be inserted at), second parameter (delete count, if you pass 0 nothing will happen if you pass a value it will delete values at 
// index) third parameter and so on are values to be inserted
let fruits = ["Apple", "Banana", "Pear", "Peach", "Grapes"]
fruits.splice(2, 0, "Watermelon", "Oranges")
console.log(fruits)

// Concatenation
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [1,9,9,8]
console.log(arr1.concat(arr2, arr3))

// includes

/*
    includes is use to check if a particular value is present in array or not, it takes 2 parameter second one being optional
    if we do not provide second argumenet it will check the given value in whole array but if we provide the second value then 
    it will just check if the value is present at the given index or not.
*/

let nums = [1,2,3,4,5,6,7,8,9]
console.log(nums.includes(1,0))

// indexOf
/* It is use to get the index of the given element in an array */
let newNums = [1,2,3,4,5,6,7,8,9]
console.log(newNums.indexOf(5))

// isArray
/* It is use to check if the variable if array or not -> Its return value is boolean*/
let testValues = ["John", "Jane", "Alex"]
console.log(Array.isArray(testValues));
