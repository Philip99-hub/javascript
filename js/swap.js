// function swap1(n1, n2) {
//     console.log([n2,n1])
//     return [n2, n1];
// }
// let num1 = Number(prompt("enter the first number"))
// let num2 = Number(prompt("enter the second number"))


// temp=swap1(num1,num2)
// num1=temp[0]
// num2=temp[1]



// // temp=num1
// // num1=num2
// // num2=temp

// console.log("num1=", num1)
// console.log("num2=", num2)


function swapValues(a, b) {
    return [b, a];
}

let x = Number(prompt("enter a num1"));
let y = Number(prompt("enter a num2"));

// Call the swapValues function to swap the values of x and y

[x, y] = swapValues(x, y);

console.log("x =", x); // Output: x = 10
console.log("y =", y); // Output: y = 5