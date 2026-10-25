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