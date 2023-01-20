let userInput = prompt("Enter a month of year.")

let autumnMonths = ['september','october','november']
let winterMonths = ['december', 'january', 'february']
let springMonths = ['march', 'april', 'may']
let summerMonths = ['june', 'july', 'aug']

if (autumnMonths.includes(userInput.toLowerCase())) {
    alert('Autumn')
} else if (winterMonths.includes(userInput.toLowerCase())) {
    alert('Winter')
} else if (springMonths.includes(userInput.toLowerCase())) {
    alert('Spring')
} else {
    alert('Summer')
}