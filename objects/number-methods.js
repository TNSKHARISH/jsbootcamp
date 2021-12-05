let num=103.4999
//console.log(num.toFixed(1))
//console.log(Math.round(num))
//console.log(Math.floor(num))
//console.log(Math.ceil(num))
min=10
max=20
//0-0.99999999
//0-0.999999*(20-10+1)=0-10.9999999
//floor(10.9999999)=0-10
//0-10+min=10-20
//let randomInteger=Math.floor(Math.random() *(max-min+1))+min
//console.log(randomInteger)
//0.383292926430735

// challenge area
//1-5-true if correct - false if not correct 
let makeguess=function(guess){
    let min=1
    let max=5
    let randomInteger=Math.floor(Math.random() *(max-min+1))+min
    return guess===randomInteger    
}
console.log(makeguess(4))