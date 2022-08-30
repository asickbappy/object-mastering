const myObj = {
 name : 'kuddud ali',
 getFullName : function(){
console.log(this);
return 'mr. ' + this.name;
 }   
}
myObj.getFullName();

anotherObj.getFullName = myObj.getFullName;
console.log(anotherObj.getFullName);


anotherObj.getFullName();


// function add(a, b){
//     console.log(this);
//     return a + b;

// }
// add(12, 13);
// anotherObj.sum = add;
// anotherObj.sum();