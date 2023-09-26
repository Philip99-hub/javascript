function twodivisibles(n1,n2){
    if(n1%n2==0){
        console.log(n1+" is divisible by "+n2)
    }
    else{
        console.log(n1+" is not divisible by "+n2)
    }
}

var num1=Number(prompt("enter the first number"))
var num2=Number(prompt("enter the second number"))
twodivisibles(num1,num2)