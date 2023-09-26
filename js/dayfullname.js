function daynameabbreviation(a){
    if(a == "sun"){
        return "sunday";
    }
    else if(a == "mon"){
        return "monday";
    }
    else if(a == "tue"){
        return "tuesday";
    }
    else if(a == "wed"){
        return "wednesday";
    }
    else if(a == "thu"){
        return "thuesday";
    }
    else if(a == "fri"){
        return "friday";
    }
    else if(a == "sat"){
        return "saturday";
    }
}
dayname=prompt("enter the day")
res=daynameabbreviation(dayname)
console.log(res)