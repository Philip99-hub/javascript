function isprime(a){
    for(i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            return false
            break;
        }
    }
    return true;
}
function primenumbers(num){
    for(p=2;p<=num;p++){
        if(isprime(p)){
            console.log(p)
        }
    }
}
input=Number(prompt("enter the number"))
primenumbers(input)