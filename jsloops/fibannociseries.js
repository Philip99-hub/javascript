function fibanoacci(num){
    a=0;b=1;
    for(i=0;i<=num;i++){
        if(a>=num){
            break
        }
        console.log(a)
        temp=a;
        a=b;
        b=temp+a;
    }
}
input=Number(prompt("enter the number"))
fibanoacci(input)