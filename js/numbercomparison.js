function numcompare(num1,num2){
    if(num1>num2){
        console.log("first is greater than second number")
    }
    else if(num1<num2){
        console.log("second number is greater than first number")
    }
    else{
        console.log("First number is equal to Second number")
    }
}

number1=Number(prompt("Enter the first number"))
number2=Number(prompt("Enter the second number"))
numcompare(number1,number2)