let score = 45
let score2 = "45"
let score3 = "45abc"

// console.log(typeof score) //number
// console.log(typeof score2) //string 
// console.log(typeof score3) //string


let valueInNumber2 =Number(score2)
let valueInNumber3 =Number(score3)

// console.log(typeof valueInNumber2) //ok
// console.log(typeof valueInNumber3) //but 45abc is not a number then lets print valueInNumber
// console.log(valueInNumber2)
// console.log(valueInNumber3) //here we got NaN

let score5=null
// console.log(score5); //null

let isLoggedin=true
let booleanIsloggedin = Boolean(isLoggedin)
// console.log(booleanIsloggedin)//true


let someNumber=33
let isString = String(someNumber)
console.log(isString)//33
console.log(typeof isString)//string
