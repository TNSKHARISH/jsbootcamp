// Multiple arguments
let add=function(num1,num2,num3){
    let result=num1+num2+num3
    console.log(result)
}
add(5,6,7)
//Default arguments
let getScoreText = function(name = 'Fafistodu',score = 0){
    return `Name ${name} Score ${score }`
}
let  mustifikka=getScoreText(undefined,99)
console.log(mustifikka)

// Challenge area
// total for bill, tip percentage
let tip=function (Tbill,tipPercentage=.2){
    return `Tip percentage is ${tipPercentage*100} and The Tip amount is ${Tbill*tipPercentage}`

}
let Tip= tip(500,undefined)
console.log(Tip)

