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

// Maps

let myMap = new Map;

myMap.set('name', 'matt')
myMap.set('name', 'Eric')

console.log('Map: ');
console.log(myMap);
console.log(myMap.size);

//Set

let mySet = new Set([3,1,4,1,5,3,2,1])

console.log('Set:');

console.log(mySet);
console.log(mySet.size);
console.log(mySet.delete(5));
console.log(mySet);
console.log(mySet.has(5));