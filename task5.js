let nhap = prompt('Enter a sequence of number, separated by commands(,): ');
let a = nhap.split(',');
let s = 0;
for(i = 0; i < a.length; i++){
    s += Number(a[i]);
}
console.log(s);