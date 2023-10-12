// input1=Number(prompt("enter the number for row"))
// input2=Number(prompt("enter the number column"))
// matrix(input1,input2)

// function matrix(row,column){
//     for(i=0;i<row;i++){
//         for(j=0;j<column;j++){
//             document.write('*')
//         }
//         document.write("<br>")
//     }
// }

// for(i=0;i<5;i++){
//     for(k=0;k<i;k++){
//         document.write('*')
//     }    
//     document.write("<br>")
// }
// for(a=0;a<5;a++){
//     for(b=0;b<5-a;b++){
//         document.write('*')
//     }
//     document.write("<br>")
// }



// for(i=0;i<=5;i++){
//     for(j=0;j<6-i;j++){
//         document.write("&nbsp;&nbsp")
//     }
//     for(k=0;k<5-j;k++){
//         document.write('*')
//     }
//     document.write("<br>")
// }
// for(i=0;i<=5;i++){
//     for(j=0;j<i;j++){
//         document.write("&nbsp;&nbsp")
//     }
//     for(k=0;k<5-i;k++){
//         document.write('*')
//     }
//     document.write("<br>")
// }


for(i=0;i<5;i++){
    for(j=0;j<5-i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(k=0;k<2*i+1;k++){
        document.write('*')
    }
    document.write("<br>")
}
for(i=0;i<=5;i++){
    for(j=0;j<i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(k=0;k<10-i*2+1;k++){
        document.write('*')
    }
    document.write("<br>")
}