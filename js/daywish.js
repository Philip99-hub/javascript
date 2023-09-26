function daywish(time){
    if(time<=12){
        console.log("Good Morning")
    }
    else if(time>=12 && time<=17){
        console.log("Good Afternoon")
    }
    else if(time>=17){
        console.log("Good Evening")
    }
}

daytime = Number(prompt("enter the time"))
daywish (daytime)