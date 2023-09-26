function dayofweek(day){
    if(day == "1"){
        console.log("Sunday")
    }
    else if(day == "2"){
        console.log("monday")
    }
    else if(day == "3"){
        console.log("tuesday")
    }
    else if(day == "4"){
        console.log("wednesday")
    }
    else if(day == "5"){
        console.log("thursday")
    }
    else if(day == "6"){
        console.log("friday")
    }
    else if(day == "7"){
        console.log("saturday")
    } 
}

dayweek = Number(prompt("Enter the number corresponding to day"))
dayofweek(dayweek)