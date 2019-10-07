let n = Number(prompt('Enter a number between 0 and 9'));
if(0 <= n <= 4.5){
    alert('lower half of 9')
}else if(4.5 < n <= 9){
    alert('higher half of 9');
}else{
    alert(' Unexcepted! ');
}