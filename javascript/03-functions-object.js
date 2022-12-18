//  Functions

// Function Declaration
function sum() { // function without arguments
    let num1 = 20;
    let num2 = 40;
    console.log(`Addition of two numbers is: ${num1 + num2}`)
}

// function calling
sum()

function sum1(num1, num2) { // function with parameters
    console.log(`Addition is: ${num1 + num2}`);
}

sum1(20, 1);


// Function with return type and parameters
function sum3(num1, num2) {
    return num1 + num2
}

console.log(sum3(2,4))

let car = () => {
    console.log('Ferrraaarrrrriiiiiiiii.....')
}

car();

let username = {
    name: "Jaspal Singh",
    age: 24,
    isStudent: true,
    college: "Georgian College"
}

console.log(username.name);

// for in

for (let x in username) {
    console.log(x);
}