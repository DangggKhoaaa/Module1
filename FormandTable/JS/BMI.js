let weight = prompt('Enter the weight');
let height = prompt('Enter the height');
let bmi = weight / (height*height);
if (bmi<18.5) {
    alert('Underweight')
}
else if (bmi<25.0) {
    alert('Normal')
}    
else if (bmi<30) {
    alert('Overweight')
}    
else {
    alert('Obese')}