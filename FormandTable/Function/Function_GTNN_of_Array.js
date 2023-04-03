function findMin(array){
    let min = array[0];
    let count = 1;
    for(let i = 1; i < array.length; i++){
        if(min < array[i]){
            min = array[i];
        }
        count++;
    }
    return count;
}
console.log(findMin());