function sesondeterminer(a){
    if(a<=2){
        console.log("Winter")
    }
    else if(a<=5){
        console.log("Spring")
    }
    else if(a<=8){
        console.log("Summer")
    }
    else if(a<=11){
        console.log("Autumn")
    }
    else if(a<=12){
        console.log("Winter")
    }
}
month=Number(prompt("enter the nunber of month"))
sesondeterminer(month)