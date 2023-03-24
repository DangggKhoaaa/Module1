function factorial(number) {
    let mul = 1;
    for (let i = 1; i <= number; i++) {
        mul *= i;
    }
    console.log(mul)
}
factorial(5)