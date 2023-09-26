function largestamong3 (num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1+" is greater than other two")
    }
    else if(num2>num1 && num2>num3){
        console.log(num2+" is greater than other two")
    }
    else{
        console.log(num3+" is greater than other two")
    }
}
number1=Number(prompt("Enter the First number"))
number2=Number(prompt("Enter the Second number"))
number3=Number(prompt("Enter the Third number"))
largestamong3(number1,number2,number3)