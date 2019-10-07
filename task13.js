setshape('rocket')
clear()
let n = Number(prompt('how many polygon: '))
for(let i = 1; i <= n; i++){
  let count = 0
  while(count < i+2){
  fd(100)
  rt(360/(i+2))
  count++}}
           