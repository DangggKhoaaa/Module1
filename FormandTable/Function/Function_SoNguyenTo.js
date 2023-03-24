function isPrime(number) {
    if (number <= 1) {
        return number + ' is not Prime';
    }
    else if (number < 4) {
        return number + ' is Prime';
    }
    else for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return number + ' is not Prime';
            }
        }
        return number + ' is Prime';
}
console.log(isPrime(1235))
