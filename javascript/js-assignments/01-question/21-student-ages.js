const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortedArray = ages.sort((a, b) => a - b)

console.log(Math.max(...sortedArray))
console.log(Math.min(...sortedArray))

const mid = Math.floor(sortedArray.length / 2);
console.log(sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2);

let sumofages = ages.reduce((sum, a) => sum + a, 0)

console.log(sumofages / sortedArray.length)

console.log(Math.max(...sortedArray) - Math.min(...sortedArray))
console.log(Math.abs(Math.max(...sortedArray)) -(sumofages / sortedArray.length));
console.log(Math.abs(Math.min(...sortedArray)) -(sumofages / sortedArray.length));