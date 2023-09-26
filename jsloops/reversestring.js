function reversestring(num){
    stringreversed=''
    for(i=num.length-1;i>=0;i--){
        stringreversed += num[i]
    }
    return stringreversed;
}
input=(prompt("enter the string"))
res=reversestring(input)
console.log(res)
