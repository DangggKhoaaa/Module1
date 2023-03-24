function generateArray(size, min, max) {
    let numbers = new Array(size);
    for (i = 0; i < numbers.length; i++) {
        numbers[i] = Math.ceil(Math.random() * (max - min) + min)
    }
    // console.log(numbers);
    return numbers;
}
// let array_1 = generateArray(10, 100, 500);
// let array_2 = generateArray(15, 1, 30);

// console.log(array_1);
// console.log(array_2.toString());
// document.write(generateArray(20, 10, 100));
function find(x, array) {
    for (let i = 0; i < array.length; i++){
        if (x == array[i]){
            return true;
        }
    }
    return false;

}
let array_3 = generateArray(10, 0, 15);
console.log(array_3);
console.log(find(7, array_3)); 