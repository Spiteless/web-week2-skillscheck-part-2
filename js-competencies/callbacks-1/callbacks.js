//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

//Code here
function stringItOut(arr){
  arr.sort( (a,b) => {
    if     (a > b) {return -1;}
    else if(a < b) {return 1;}
    else           {return 0}
  })
  return arr.toString()
}

function compare(a,b) {
  if     (a > b) {return -1;}
  else if(a < b) {return 1;}
  else           {return 0}
}
// let alpha = ["hello", "beautiful", "world"]
// let nums = [1,2,3,4,5,6,7,8,9,10]

// console.log(stringItOut(alpha))
// console.log(stringItOut(nums))

//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

//Code here
let mathResult = math(complex,2,3)

