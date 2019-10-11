let nhap = prompt('Enter a sequence of number, separated by commands(,): ');
let a = nhap.split(',');

let min = Math.min(...a);
alert(`The smallest number is ${min} `);