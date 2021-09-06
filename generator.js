
var original = {name: 'Matt'};
// assign value to a new variable nto changing the original value
var newObj = Object.assign({}, original); 
newObj.name = 'Kevin'
console.log(`${newObj.name} --- ${original.name}`);

//coverting an array-like-object into an array
var divs = document.getElementsByTagName('div');
var converted = Array.from(divs)