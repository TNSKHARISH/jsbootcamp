//Js follows Lexical scope ( ststic scope)
// Two types of scope 
// Global scope --->Defined outside all code blocks
// Local scope ---> Defined inside code blocks
// Global scope (varOne)
// Local scope (varTwo)
    //Local scope(varFour)
// Local scope(varThree)
// In a scope you can access variables declared in that scope only . (Or) Declared in parent/ancesstor scope
let varOne ='varOne'
 
if(true){
    console.log(varOne)
    let varTwo='varTwo'
    console.log(varTwo)
    if(true){
        let varFour ='varFour'
        console.log(varFour)
    }
}
if(true){
    let varThree ='varThree'
    console.log(varThree)
}
console.log(varTwo)
