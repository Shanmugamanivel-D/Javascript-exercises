// Variables and Output
// Easy
// Declare two variables, name = "Shan" and age = 22.

// Print the following output using console.log().
// My name is Shan
// My age is 22


let name = "Shan";
let age = 22;

console.log(`My name is ${name}`);
console.log(`My age is ${age}`);


// Arithmetic Operators
// Easy
// Declare a = 20 and b = 5. Write a program to print their:
// - Sum
// - Difference
// - Product
// - Quotient
// Expected output:
// Sum: 25
// Difference: 15
// Product: 100
// Quotient: 4

let a = 20;
let b = 5;

let Sum = a + b;
let Difference = a - b;
let Product = a * b;
let Quotient = a / b;

console.log(`Sum: ${Sum}`);
console.log(`Difference: ${Difference}`);
console.log(`Product: ${Product}`);
console.log(`Quotient: ${Quotient}`);

// If...Else Statement
// Easy–Medium
// Declare num = 7.

// Write a program to check whether the number is even or odd.

// Expected output:
// Odd number

let num = 7;

if (num % 2 === 0)
{
    console.log("Even number");
}
else
{
    console.log ("Odd number");
}


// For Loop
// Medium
// Write a for loop that prints numbers from 1 to 10.

// Expected output:
// 1 2 3 4 5 6 7 8 9 10


for (let count = 1; count <= 10; count = count+1)
{
    console.log(count);
}

for (let i=1; i<=20; i++)
{
    if (i % 2 ===0)
    {
        console.log(i);
    }
}


// Write a JavaScript program using let to store a = 10 and b = 5. 
// Print their sum, difference, and multiplication.


let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;
let multiplication = a * b;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Multiplication: ${multiplication}`);


// Write a program to check a student's mark.
// - 90 or above → "Grade A"
// - 75 to 89 → "Grade B"
// - 50 to 74 → "Grade C"
// - Below 50 → "Fail"
// Use if, else if, and else. Test with mark = 82.

let studentmark = 85;

if (studentmark >= 90)
{
    console.log("Student grade is Grade A");
}
else if (studentmark >=75 && studentmark <=89)
{
    console.log("Student grade is Grade B");
}
else if (studentmark >= 50 && studentmark <=74)
{
    console.log("Student grade is Grade C");
}
else 
{ 
    console.log("Student grade is fail");
}

// Write a program using a for loop to print the multiplication table of 5, from 5 × 1 to 5 × 10.

let num5 = 5;

for (let i = 1; i <= 10; i++)
{
    console.log(`${num5} * ${i} = ${num5 * i}`);
}


// DOM exercise: change the message in web.html to "Welcome to JavaScript!".


//<html>

//<p id="message">Hello</p>

//<button type="button" onclick="changetext()">Click me</button>

//<script>
//function changetext()
//{
//    document.getElementById("message").textContent = "Welcome to JavaScript!";
//}
//</script>

// Write a program to store your name, age, and student status in variables.

// Print all three values using console.log().

// Example: name = "Shan", age = 22, student status = true.

let name = "Shan";
let age = 22;
let studentstatus = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Student Status: ${studentstatus}`);


// Write a program to perform arithmetic operations on a = 20 and b = 6.

// Print the addition, subtraction, multiplication, division, and remainder.

let a = 20;
let b = 6;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;


console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Remainder: ${remainder}`);


// Write a program to check whether a number is even or odd.

// Use if-else and test with number = 17.

let number = 17;

if (number % 2 === 0)
{
    console.log("Even number");
}
else 
{
    console.log("Odd number");
}

// Write a program using a for loop to print numbers from 1 to 20.

for (let i = 1; i <= 20; i++)
{
    console.log(i);
}


// Write a program to print the multiplication table of a given number using a for loop.

let num7 = 7;

for (let n = 1; n <= 10; n++)
{
    console.log(`${num7} * ${n} = ${num7 * n}`);
}

// Write a JavaScript program to print all even numbers from 1 to 50.

// Requirements:
// - Use a for loop.
// - Use an if statement.
// - Use the remainder operator (%).
// - Print only even numbers.

for (let z = 1; z <= 50; z++)

    {
        if (z%2 === 0)
        {
            console.log(z);
        }
    }