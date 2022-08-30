function doSomething(){
    console.log(3333333333);
}

setTimeout(doSomething, 4000)
console.log(4444444444);
console.log(5555555555);
console.log(6666666666);


setTimeout(function(){
    console.log('lazy and wait')
}, 4000)
console.log(5555555555);
console.log(6666666666);



setInterval(function(){
    console.log('doing it again')
}, 4000)
console.log(5555555555);
console.log(6666666666);