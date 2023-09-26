function largestamong1 (num1,num2){
    if(num1>num2){
        console.log(num1+" is greater than "+num2)
    }
    else{
        console.log(num2+" is greater than "+num1)
    }
}
number1=Number(prompt("Enter the first number"))
number2=Number(prompt("Enter the second number"))
largestamong1(number1,number2)