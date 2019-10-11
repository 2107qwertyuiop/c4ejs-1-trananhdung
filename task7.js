const arr = [3, 4, 6, -9, 10, -88, 2];
let search = Number(prompt('Enter a number'));
let index = arr.indexOf(search,0);

if(search == arr[index]){
    alert(`${search} is found in my array at index ${index}`);
}else{
    alert(`Number ${search} is not found`);
}