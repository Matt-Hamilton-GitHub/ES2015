
var original = {name: 'Matt'};
var newObj = Object.assign({}, original);
newObj.name = 'Kevin'
console.log(`${newObj.name} --- ${original.name}`);

