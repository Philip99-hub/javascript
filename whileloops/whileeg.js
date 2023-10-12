i=0;
while(i<=10){
    document.write(i)
    i++;
}

i=0;
while(i<=10){
    if(i%2==0){
        document.write(i)
    }
    i++;
}


//number sum
// function numbersum(n){
//     sum=0
// while(n>0){
//     rem=n%10
//     sum+=rem
//     n=parseInt(n/10)
// }
// document.write(sum)
// }
// input1=Number(prompt("enter the number"))
// numbersum(input1)


//count of a digit 
// n=125
// sum=0
// count=0
// while(n>0){
//     rem=n%10
//     sum+=rem
//     count++
//     n=parseInt(n/10)
// }
// document.write(count)


//largest digit of a number
// n=987
// l=0
// while(n>0){
//     rem=n%10;
//     if(rem>l){
//         l=rem;
//     }
//     n=parseInt(n/10)
// }
// document.write(l)



//smallest digit of a number
// n=652
// s=9
// while(n>9){
//     rem=n%10;
//     if(rem<s){
//         s=rem;
//     }
//     n=parseInt(n/10)
// }
// document.write(s)



    var largest = 0; 
    var second = 0; 
    n=567
    while (n > 0) { 
      var r = n % 10; 
      if (r > largest) { 
        second = largest; 
        largest = r; 
      } else if (r > second && r < largest) { 
        second = r; 
      }
      //parseInt another function of math.floor
      n = Math.floor (n / 10); 
    }
  document.write (second); 
     