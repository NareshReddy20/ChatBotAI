let myArray=[5,7,8,10,"array"];
console.log(myArray);

let deleteItems=myArray.splice(1,2);
console.log(deleteItems);

myArray.splice(2,0,"one",false);
console.log(myArray);

myArray.splice(1,1,90);
console.log(myArray);

let m = [5, 12, 8, 130, 44,130];
let itemIndex = m.findIndex(function(eachItem) {
  console.log(eachItem);
});


console.log(m.includes(11));

let index=m.indexOf(130);
console.log(index);

m.unshift(12);
m.unshift(50);
let length=m.unshift(500);
console.log(m);
console.log(length);

let removeItem=m.shift();
console.log(removeItem);

console.log(m.concat(myArray));


a=[10,20,5,6,90];
a.sort()
console.log(a);