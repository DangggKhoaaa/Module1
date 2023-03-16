const Equation = "a*x*x+b*x+c=0"
let delta = b*b-4*a*c
if (a===0) {
    console.log('Day khong phai phuong trinh bac 2')
} else {
    if (delta < 0) {
        console.log('Phuong trinh vo nghiem')
    } else {
        if (delta == 0) {
            let x = -b/(2*a)
            console.log('Phuong trinh co nghiem kep x=' + x)
        } else {
            if (delta > 0) {
                let x1 = (-b + Math.sqrt(delta))/(2*a)
                console.log('x1='+x1)
                let x2 = (-b - Math.sqrt(delta))/(2*a)
                console.log('x2='+x2)
            }
        }
    }
}