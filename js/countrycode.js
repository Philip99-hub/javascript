// function countrycode(code) {
//     if (code === 'US') {
//         console.log("English")
//     }
//     else if (code === 'FR') {
//         console.log("French")
//     }
//     else if (code === 'DE') {
//         console.log("Germen")
//     }
//     else if (code === 'JP') {
//         console.log("Japanese")
//     }
//     else if (code === 'IT') {
//         console.log("Italian")
//     }

//     else {
//         console.log("Unknown")
//     }
// }

// code1 = prompt("Enter the country code")
// countrycode(code1)


function countrycode(code){
    switch(code){
        case "us" :
            console.log("English")
            break;
        case "fr" :
            console.log("French")
            break;
        case "de" :
            console.log("Germen")
            break;
        case "jp" :
            console.log("Japanese")
            break;
        default :
            console.log("unknown")
        }
}
code1=prompt("enter the code")
countrycode(code1)