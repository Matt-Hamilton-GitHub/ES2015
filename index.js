// function tripleAndFilter(arr){
//     return arr.map(function(value){
//       return value * 3;
//     }).filter(function(value){
//       return value % 5 === 0;
//     })
//   }


//   function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }

// function mapFilterAndReduce(arr){
//     return arr.map(function(val){
//       return val.firstName
//     }).filter(function(val){
//       return val.length < 5;
//     }).reduce(function(acc,next){
//       acc[next] = next.length
//       return acc;
//     }, {})
//   }



  //refactored

 const tripleAndFilter = arr =>arr.map(value => value * 3).filter(value => value % 5 === 0)
  
 const doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val=>val *2)

 const mapFilterAndReduce = arr =>arr.map(val => val.firstName).filter(val =>  val.length < 5).reduce(function(acc,next)
 { acc[next] = next.length
      return acc;
    }, {})
  
const createStudentObj = (fn, ln) => ({firstName: fn, lastName: ln})

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout(() => console.log('Hello ' + this.firstName),1000)
    }
  }


  //default parameters 

  function add(a=2, b=6){
    return a+b
  }

  add(2)
  add(2,4)
  add()
  // console.log(add());

  // loop for of

  var arr = ['a','b','c','d','e']

for(let val of arr){
  // console.log(val);
}

// rest 

function allArguments(...arg){
  // console.log(arg);
  // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

allArguments(1,2,3,4,5,6,7,8,9)


//spread 

var arr1 = [10,20,40,50]
var arr2 = [100,200,300]
var arr3 = [1000, 2000, 3000]

var combined = [...arr1,...arr2,...arr3]
// console.log(combined);

var maxValue = Math.max(...combined)
// console.log('Max: '+ maxValue);

/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(){
  return Math.min(...arguments)
  
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
  placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
  placeInMiddle([1],[3,4,5]) // [3,4,5,1]
  placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
  placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
  
  return [...arr.slice(0,arr.length/2), ...vals, ...arr.slice(arr.length/2 )]
  
}

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

  joinArrays([1],[2],[3]) // [1,2,3]
  joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
  joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
  joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinArrays(...args){

  
  return args.reduce((acc, next)=> acc.concat(next)
  ,[])
}
/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
  sumEvenArgs(1,2,3,4) // 6
  sumEvenArgs(1,2,6) // 8
  sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(...args){
  
 
  return args.reduce((acc, next)=> next % 2 === 0 ? acc+=next : acc, 0)
      
     



}
/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

  function personSubtract(a,b,c){
      return this.firstName + " subtracts " + (a-b-c);
  }
  
  var person = {
      firstName: 'Elie'
  }
  
  var flipFn = flip(personSubtract, person);
  flipFn(3,2,1) // "Elie subtracts -4"
  
  var flipFn2 = flip(personSubtract, person, 5,6);
  flipFn2(7,8). // "Elie subtracts -4"

  flip(subtractFourNumbers,this,1)(2,3,4) // -2
  flip(subtractFourNumbers,this,1,2)(3,4) // -2
  flip(subtractFourNumbers,this,1,2,3)(4) // -2
  flip(subtractFourNumbers,this,1,2,3,4)() // -2
  flip(subtractFourNumbers,this)(1,2,3,4) // -2
  flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
  flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
  flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg, ...outerArgs){
return function(...innerArgs){
  let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
  return fn.apply(thisArg, allArgs.reverse());
}
}

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

  function firstNameFavoriteColor(favoriteColor){
      return this.firstName + "'s favorite color is " + favoriteColor
  }
  
  var person = {
      firstName: 'Elie'
  }
  
  var bindFn = bind(firstNameFavoriteColor, person);
  bindFn('green') // "Elie's favorite color is green"
  
  var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
  bindFn2('green') // "Elie's favorite color is blue" 
  
  function addFourNumbers(a,b,c,d){
      return a+b+c+d;
  }

  bind(addFourNumbers,this,1)(2,3,4) // 10
  bind(addFourNumbers,this,1,2)(3,4) // 10
  bind(addFourNumbers,this,1,2,3)(4) // 10
  bind(addFourNumbers,this,1,2,3,4)() // 10
  bind(addFourNumbers,this)(1,2,3,4) // 10
  bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/


  function bind(fn, thisArg, ...outerArgs){
return function(...innerArgs){
  return fn.apply(thisArg, [...outerArgs, ...innerArgs])
}
}
  
//destructuring 

function displayStudentInfo(obj){
  const {first, last} = obj;
  return `Your full name is ${first} ${last}`
}

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}))

function printFullName({first,last}){
  return `Your full name is ${first} ${last}`
}

function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
  var start = 'The student';
  if(likesJavaScript && likesES2015){
    start += ' likes JavaScript and ES2015'
  } else if(likesJavaScript){
    start += ' likes JavaScript!'
  } else if(likesES2015){
    start += ' likes ES2015!'
  } else {
    start += ' does not like much...'
  }
  return start;
}

function reverseArray(arr){
  for(var i = 0; i < arr.length/2; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr;
}



// -------------------------- Part II ----------------------


      // CLASS

      class Student{
        constructor(firstName, lastName){
          this.firstName = firstName;
          this.lastName = lastName;
        }

        static isStudent(obj){
          return obj.constructor === Student
        }
      }

      var matt = new Student('Matt', 'Hamilton')

      console.log(matt);
      console.log(Student.isStudent(matt));


      // 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.


/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

class Person{
  constructor(firstName, lastName, favoriteColor, favoriteNumber){
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteNumber = favoriteNumber;
  }
  
  multiplyFavoriteNumber(num){
      return num *  this.favoriteNumber
  }

}

class Professor extends Person{

  constructor(firstName, lastName){
   super(firstName, lastName)
  }
}

// ---------------------------------------
// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype

class Vehicle{
  constructor(make, model, year){
      this.make = make;
      this.model = model;
      this.year = year;
      
  }
  
  start(){
      return 'VROOM!'
  }
  
  toString(){
      return `The make, model, and year are ${this.make} ${this.model} ${this.year}`
  }
}

class Car extends Vehicle{
  
  constructor(){
      super(...arguments)
       this.numWheels = 4
     
  }
}

class Motorcycle extends Vehicle{
  
  constructor(make, model, year){
      super(make, model, year)
      this.numWheels = 2
  }
  
}


class Child extends Person{
  constructor(firstName, lastName,favoriteColor, favoriteNumber){
    super(firstName, lastName,favoriteColor, favoriteNumber)
  }
}

// Maps

let myMap = new Map;

myMap.set('name', 'matt')
myMap.set('name', 'Eric')

console.log('Map: ');
console.log(myMap);
console.log(myMap.size);

//Set - delites repeating values
let once = new Set([1,1,1,1,1,1,2])
console.log(once);
let mySet = new Set([3,1,4,1,5,3,2,1])

console.log('Set:');

console.log(mySet);
console.log(mySet.size);
console.log(mySet.delete(5));
console.log(mySet);
console.log(mySet.has(5));

let trySet = new Map()
trySet.set('name', 'matt', 'age', '25')
console.log(trySet.value);

class MessageBoard {
    
  /*
  In your constructor method, you should assign two properties for each object created from the MessageBoard class. 
  The first should be a property called messages which is an empty Map, and the second is a property called id which
   has a value of 1. 
  
  var m = new MessageBoard
  
  m.hasOwnProperty('messages') // true
  m.messages.constructor // function Map() { [native code] }
  m.hasOwnProperty('id') // true
  m.id // 1
  */
  
  constructor(messages, id){
    this.messages = new Map()
    this.id = 1
}
  
  /*
  
  Add a method called addMessage which accepts a string. The function should add a key and value to the messages 
  map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the 
  function. The function should return the object created from the class so that the method can be chained. 
  (HINT - to implement the last part, make sure to return this).
  
  var m = new MessageBoard
  m.addMessage('hello');
  m.messages.size // 1
  m.addMessage('awesome!') // m
  m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
  */
  
  addMessage(){
      
  }
  
  /*
  Add a method called findMessageById which accepts a number and returns the message in the messages map with 
  the same key as the number passed to the function. If the key is not found in the messages map, the function 
  should return undefined.
  
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.findMessageById(1) // 'hello!'
  m.findMessageById(2) // 'hi!'
  m.findMessageById(3) // 'whats up?'
  m.findMessageById(4) // undefined
  m.findMessageById() // undefined
  */
  
  findMessageById(){
    
  }
  
  /*
  Add a method called findMessageByValue which accepts a string and returns the message in the messages map with 
  the same value as the string passed to the function. If the value is not found in the messages map, the function 
  should return undefined.
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.findMessageByValue('hello!') // 'hello!'
  m.findMessageByValue('hi!') // 'hi!'
  m.findMessageByValue('whats up?') // 'whats up?'
  m.findMessageByValue('nothing here') // undefined
  m.findMessageByValue() // undefined
  */

  
  findMessageByValue(){
    
  }
  
  /*
  Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.removeMessage(1)
  m.removeMessage(2)
  m.messages.size // 1
  m.removeMessage() // m
  */
  
  removeMessage(){
      
  }
  
  /*
  Add a method called numberOfMessages which returns the number of keys in the messages map
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.numberOfMessages() // 3
  */
  
  numberOfMessages(){
      
  }
  
  /*
  Add a method called messagesToArray which returns an array of all of the values in the messages map
  
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
  */
  
  messagesToArray(){
      
  }
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(){

}

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(){

}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(){

}
