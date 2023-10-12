

function matrix1(r,w){
for(i=0;i>5;i--){
    for(j=0;j<5;j++){
        document.write('*')
    }
    document.write("<br>")
}
}
row=Number(prompt("enter the number for row"))
column=Number(prompt("enter the number for column"))
matrix1(row,column)

function matrix1(r,w){
    for(i=0;i<=r;i++){
        for(j=0;j<=i;j++){
            document.write(i+1)
        }
        document.write("<br>")
    }
}
row=Number(prompt("enter the number for row"))
column=Number(prompt("enter the number for column"))
matrix1(row,column)


for(i=0;i<=5;i++){
    for(j=0;j<=5-i;j++){
        document.write('*')
    }
    document.write("<br>")
}


for (i = 0; i <= 5; i++) {
    for (j = 0; j <= 5 - i; j++) {
        document.write(5-i)
    }
    document.write("<br>")
}


    for(i=0;i<=5;i++){
        for(j=0;j<=5-i;j++){
            document.write("&nbsp;&nbsp")
        }
        for(k=1;k<=i;k++){
            document.write('*')
        }
        document.write("<br>")
    }

    for(i=0;i<=5;i++){
        for(j=0;j<=5-i;j++){
            document.write("&nbsp;&nbsp")
        }
        for(k=1;k<=i;k++){
            document.write(i)
        }
        document.write("<br>")
    }

    for(i=0;i<=5;i++){
        for(j=0;j<=5-i;j++){
            document.write("&nbsp;&nbsp")
        }
        for(k=1;k<=i;k++){
            document.write(String.fromCharCode(64+27-k))
        }
        document.write("<br>")
    }

    for(i=0;i<=5;i++){
        // for(j=0;j<=5-i;j++){
        //     document.write("&nbsp;&nbsp")
        // }
        for(k=1;k<=i;k++){
            document.write(String.fromCharCode(64+k))
        }
        document.write("<br>")
    }

    