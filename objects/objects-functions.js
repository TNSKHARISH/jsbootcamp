let myBook= {
    title: '1984',
    author: 'George Orwell',
    Pagecount: 326
}

let otherBook= {
    title: 'A peoples History',
    author: 'Howard Zinn',
    Pagecount: 1326
}
let getSummary=function(book){
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.Pagecount} pages long`
    }
    //console.log(`${book.title} by ${book.author}`)
}
let bookSummary=getSummary(myBook)
let otherBookSummary=getSummary(otherBook)
console.log(bookSummary.summary)
console.log(otherBookSummary.pageCountSummary)

// Challenge area
//create function -take fahreinheit in - return object with all three
let convertFahrenheit= function(fahrenheit){
return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67)*(5/9),
    celsius: (fahrenheit-32)*(5/9)
}
}
let temps=convertFahrenheit(74)
console.log(temps)