function multiplicationtable(num) {
    for (i = 1; i <= 10; i++) {
        console.log(i + '*' + num + '=' + i * num)
    }
}
input = Number(prompt("enter the number"))
multiplicationtable(input)