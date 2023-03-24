function smallest(num_1, num_2, num_3) {
    let min = num_1;
    if (min > num_2) {
        min = num_2;
        if (min > num_3) {
            min = num_3;
            return min;
        }
        else {
            return min;
        }
    }
    else 
        if (min > num_3) {
            min = num_3;
            return min;
        }
        else {
            return min;
        }
}
console.log(smallest(15, 10, -1))