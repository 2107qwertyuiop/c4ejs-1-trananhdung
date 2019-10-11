clear();
let color = ['red', 'grey', 'blue', 'purple', 'cyan'];
for (i = 0; i < 5; i++){
  color(`${color[i]}`);
  for (j = 1; j <= 4; j++){
  fd(i*50);
  rt(90);
}
}