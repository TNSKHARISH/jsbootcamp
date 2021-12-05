// students score, total possible score
// 15/20 --> You got a C {75%}!
// A 90-100, B 80-89, C 70-79, D 60-69, f <59
let gradecalc=function(studscore,maxscore){
    let percentage=(studscore/maxscore)*100
    let grade=null
    if(percentage>=90 && percentage<=100)
      grade='A'
      else if(percentage>=80 && percentage<=89)
      grade='B'
      else if(percentage>=70 && percentage<=79)
      grade='C'
      else if(percentage>=60 && percentage<=69)
      grade='D'
      else
      grade='F'
      return `You got a ${grade}{${percentage}%!}`
}
console.log(gradecalc(81,100))