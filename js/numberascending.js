function numascending(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        if(num2<=num3){
            console.log(num1,num2,num3)
        }
        else{
            console.log(num1,num3,num2)
        }
    }
    else if (num2<=num1 && num2<=num3) {
        if(num1<=num3){
        console.log(num2,num1,num3)
        }
        else{
        console.log(num2,num3,num1)
        }
    }
    else if (num3<=num1 && num3<=num2) {
        if(num1<=num2){
        console.log(num3,num1,num2)
        }
        else{
        console.log(num3, num2, num1)
        }
    }
}

number1 = Number(prompt("enter the first number"))
number2 = Number(prompt("enter the second number"))
number3 = Number(prompt("enter the third number"))
numascending(number1,number2,number3)