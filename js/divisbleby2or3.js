function divisby2or3(a){
    if(a%2==0 || a%3==0){
        console.log(a+" is divisible by 2 or 3")
    }
    else{
        console.log(a+" is not divisible by 2 or 3")
    }
}

num=Number(prompt("enter a number"))
divisby2or3 (num)