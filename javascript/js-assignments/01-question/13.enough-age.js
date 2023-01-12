// program to check if old enough to drive

let age = prompt("Enter your age:");
if(age >= 18) {
    alert('You are old enough to drive');
} else {
    alert(`Wait for ${18 - age} years to drive!`);
}