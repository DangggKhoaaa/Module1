let matrix = new Array(5).fill(new Array(7));
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        matrix[row][col] = Math.floor(Math.random() * 41 + 10)
    }
}
console.log(matrix);
// let matrix = [];
// for (let row = 0; row < 5; row++) {
//     matrix[row] = matrix;
//     for (let col = 0; col < 7; col++) {
//         matrix[col] = Math.floor(Math.random() * (50 - 10 + 1) + 10);
//     }
//     col = 0;    
//     console.log(matrix);
// }