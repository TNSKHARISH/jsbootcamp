// Global scope(convertFahrenheitToCelsius,result)
// Local scope(farh,celsius)
    //Local scope(isFreezing)
let convertFahrenheitToCelsius=function(farh){
    let celsius =(farh-32)*(5/9)
    if(celsius<=0)
    let isFreezing=true
    return celsius
}
let result=convertFahrenheitToCelsius(104)
console.log(result)