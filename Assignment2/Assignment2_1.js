divideby3 = 0
divideby5 = 0
divideby15 = 0
for (n = 1; n <= 100; n++) {
    s = ""
    divideby3++
    divideby5++
    if (divideby3 == 3) {
        s = s + "Fizz"
        divideby3 = 0
    }
    if (divideby5 == 5) {
        s = s + "Buzz"
        divideby5 = 0
    }
    if (divideby15 == 15) {
        s = s + "FizzBuzz"
        divideby15 = 0
    }
    if (s == "") {
        console.log(n);
    }
    else {
        console.log(s);
    }
}