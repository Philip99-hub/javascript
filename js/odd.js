function odd(n1){
    if(n1%2!==0){
        console.log(n1+ "is odd")
    }
    else{
        console.log(n1+"is even")
    }   
   
}

var input=Number(prompt("enter a number"))
odd(input)