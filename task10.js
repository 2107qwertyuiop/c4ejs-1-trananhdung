let weight = Number(prompt('Enter your weight in kg : '));
let height = Number(prompt('Enter your height in cm : '));
let n = weight/((height/100)*(height/100));
alert(`Your ibm is ${n}`);
if(n < 16){
    alert('Severely underweight')
}else if(16 <= n < 18.5){
    alert('Underweight')
}else if(18.5 <= n < 25){
    alert('Normal')
}else if(25 <= n < 30){
    alert('Overweight')
}else(n >=30)
    alert('Obese')
