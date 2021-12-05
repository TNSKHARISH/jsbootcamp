let name ='TNSK Harish'
// Length property
//console.log(name.length)
// convert string to upper case
//console.log(name.toUpperCase())
// convert string to lowercase
//console.log(name.toLowerCase())
// includes method is used to check the name
let password ='ABCabcpasswor123!@#'
//console.log(password.includes('password'))
//trim is used to remove leading and trailing spaces
//let myword=' This is my trim '
//myword.trim()
//console.log(myword.trim())

// Challenge area
// isValidPassword
// length is greater than 8 and the word doesnt contain password

let isValidPassword = function(password){
     return (password.length>8 && !password.includes('password'))
    
}

console.log(isValidPassword(password))