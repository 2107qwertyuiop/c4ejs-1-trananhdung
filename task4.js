let item = ['Jeans', 'T-shirt', 'Socks']
while(true){
    let choose =  prompt('Hi there, welcome to shop admin panel, what do you want(C, R, U, D): ');
if(choose == 'R'||choose == 'r'){
    console.log('The current items are: ');
    for(let i = 0; i < item.length; i++)
    console.log(`${i+1}. ${item[i]}`);    
}else if(choose == 'C' || choose == 'c'){
    let creat = prompt('Enter the name of new item.');
    item.push(creat);
    console.log(item);
    alert('done');
}else if(choose == 'U' || choose == 'u'){
    let updatePosition = Number(prompt('Enter the position you wanna update:'));
    item[updatePosition] = prompt('Enter the new name: ');
    console.log(item);
    alert('done');    
}else if(choose == 'D' || choose == 'd'){
    let remove = Number(prompt('Enter position you want to delete'));
    item.splice(remove ,  1);
    console.log(item);
    alert('done');
}else{
    alert('This commnad is not supported');
}}
