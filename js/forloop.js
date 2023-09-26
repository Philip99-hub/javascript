// for(i=0;i<=10;i++){
//     document.write(i +"<br> ashish <br>")
//     console.log(i)
// }



// for(i=0;i<=10;i++){
//  if(i%2==0){
//     document.write(i +"<br>")
//  }
// }

// for(i=0;i<=10;i+=2){
//        document.write(i +"<br>")
//    }

// for(i=10;i>=0;i-=2){
//     document.write(i +"<br>")
//     console.log(i)
// }

// marks=[20,32,23,20,36]
// sum=0
// for(i=0;i<marks.length;i++){
//     console.log(marks[i])
//     document.write(marks[i]+"<br>")
//     sum=sum+marks[i]
// }
// console.log(sum)
// document.write(sum)

// function inputsum(num){
//     sum=0
//     for(i=0;i<=num;i++){
//         console.log(i)
//         sum=sum+i
//     }
//     return sum;
// }
// input=Number(prompt("enter the number"))
// res=inputsum(input)
// console.log(res)

function multiplicationtable(num){
    for(i=1;i<=10;i++){
        console.log(i+'*'+num +'='+i*num)
        document.write(i+'*'+num +'='+i*num  +"<br>")
    }
}
input=Number(prompt("enter the number"))
multiplicationtable(input)