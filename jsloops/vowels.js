function numvowels(inputstring) {
    count = 0;
    for (i = 0; i < inputstring.length; i++) {
        switch (inputstring[i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                count++;
                break;
            default: break;
        }
    }
    return count;
}
input=prompt("enter the string")
res=numvowels(input)
console.log(res)