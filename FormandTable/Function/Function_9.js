
function test(x, array){
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (x == array[i]){
            count++;
        }
    }
    if(count < 1) {
        count = -1;
    }
    return count;
}
console.log(test('v', ['q', 'e', 'r', 's', 'e', 'o', 'e', 'a']));