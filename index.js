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
  console.log(add());

  // loop for of

  var arr = ['a','b','c','d','e']

for(let val of arr){
  console.log(val);
}

// rest 

function allArguments(...arg){
  console.log(arg);
  // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

allArguments(1,2,3,4,5,6,7,8,9)


//spread 

var arr1 = [10,20,40,50]
var arr2 = [100,200,300]
var arr3 = [1000, 2000, 3000]

var combined = [...arr1,...arr2,...arr3]
console.log(combined);

var maxValue = Math.max(...combined)
console.log('Max: '+ maxValue);