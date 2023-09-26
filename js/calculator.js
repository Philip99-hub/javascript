// function calculator(a,b,operator){
//     if(operator == '+'){
//         return a+b;
//     }
//     else if(operator == '-'){
//         return a-b;
//     }
//     else if(operator == '*'){
//         return a*b;
//     }
//     else if(operator == '/'){
//         return a/b;
//     }
// }

// input1=Number(prompt("enter the first number"))
// input2=Number(prompt("enter the second number"))
// calc=prompt("enter the operator")
// res=calculator(input1,input2,calc)
// console.log(res)

function calculator1(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b
            break;
        case '-':
            return a - b
            break;
        case '*':
            return a * b
            break;
        case '/':
            return a / b
            break;
    }
}

input1 = Number(prompt("enter the first number"))
input2 = Number(prompt("enter the second number"))
funtn = prompt("enter the operator")
res = calculator1(input1, input2, funtn)
console.log(res)