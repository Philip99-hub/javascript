function divisby3nd5(a){
    if(a%3==0 && a%5==0){
        console.log(a+" is divisible by 3 and 5")
    }
    else{
        console.log(a+" is not divisible by 3 and 5")
    }
}

num=Number(prompt("enter a number"))
divisby3nd5 (num)