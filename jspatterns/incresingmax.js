// function matrix1(r,w){
//     for(i=0;i<=r;i++){
//         for(j=0;j<=i;j++){
//             document.write('*')
//         }
//         document.write("<br>")
//     }
// }
// row=Number(prompt("enter the number for row"))
// column=Number(prompt("enter the number for column"))
// matrix1(row,column)



for (j = 0; j <= 5; j++) {
    for (i = 0; i < j; i++) {
        document.write('*')
    }
    document.write("<br>")
}
