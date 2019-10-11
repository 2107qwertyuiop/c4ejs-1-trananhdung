let sheepSize = [5, 7, 300, 90, 24, 50, 75]
console.log(`Hello, my name is Phuong Nam nam and here is my sheep sizes:\n ${sheepSize.join(' ')}\n`);

console.log(`My biggest sheep has size ${Math.max(...sheepSize)}`);
let biggest = Math.max(...sheepSize);
let a = sheepSize.indexOf(biggest,0);
sheepSize[a] = 8;
console.log(`After sheering, this is my flock: ${sheepSize.join(' ')}\n`);

// 8.4
let month = Number(prompt(`Enter amount of month`));
for (j = 1; j <= month; j++){
for (i = 0; i < sheepSize.length; i++){
    sheepSize[i] = sheepSize[i]+ 50;
}
console.log(`MONTH ${j}`);
console.log(`This is size of sheep after ${j} month: ${sheepSize.join(' ')}`)
console.log(`My biggest sheep has size ${Math.max(...sheepSize)}. Let's shave it`);
biggest = Math.max(...sheepSize);
let b = sheepSize.indexOf(biggest,0);
sheepSize[b] = 8;
console.log(`After sheering, this is my flock: ${sheepSize.join(' ')}\n`);;
}

// 8.6
let totalSize = 0;
for (i = 0; i< sheepSize.length; i++){
    totalSize += sheepSize[i];
}
console.log(`This is total size of my sheep ${totalSize}`);
console.log(`I would get: ${totalSize}*2$ = ${totalSize*2}$`);
