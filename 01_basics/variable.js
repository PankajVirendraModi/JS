const accountID= 144575
let acEmail = "pankaj@google.com"
var acPassword = "mumbai4545" //old method for variable assignment
acCity = "Mumbai"
let acState; //undefined

// accountID=3455

//console.log(accountID) //TypeError: Assignment to constant variable. you can't reassign const variable

acPassword="jaipur6104"
acEmail="joker@fb.com"
// console.log(acEmail) //joker@fb.com, we can reassign the value of let variable

acCity="jaipur"
// console.log(acCity)

console.log(acState) //Undefined


console.table([accountID,acEmail,acPassword,acCity,acState])