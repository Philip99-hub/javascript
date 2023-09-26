function direction(a){
    if(a == "n"){
        return "North";
    }
    else if(a=="w"){
        return "west";
    }
    else if(a=="s"){
        return "south";
    }
    else if(a=="e"){
        return "east";
    }
}
direction1=prompt("enter the direction")
res=direction(direction1)
console.log(res)