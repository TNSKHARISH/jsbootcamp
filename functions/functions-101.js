// function - input, code, output

let greetUser =  function(){
    console.log("welcome User!")
}  
greetUser()
greetUser()
greetUser()

let square = function(num){
    //console.log(num*num)
    let result = num*num
    return result
}
let value=square(9)
let otherWise=square(10)
console.log(value)
console.log(otherWise)

// challenge area

let convertFahrenheitToCelsius=function(farh){
    let celsius =(farh-32)*(5/9)
    return celsius
}
let result=convertFahrenheitToCelsius(104)
console.log(result)