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

for (i = 1; i <= 10; i++)
{
    console.log(`5 * ${i} = ${5 * i}`);
}


// DOM exercise: change the message in web.html to "Welcome to JavaScript!".