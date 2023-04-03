
function findGreatest(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }

    }
    return max;
}
console.log(findGreatest([3,6,8,2,4,5,1]));