let myBook= {
    title: '1984',
    author: 'George Orwell',
    Pagecount: 326
}

console.log(` The book title is ${myBook.title} The book author is ${myBook.author} and No of pages is ${myBook.Pagecount}`)
myBook.title='Animal fare'
console.log(`${myBook.title} by ${myBook.author}`)
//challenge area
// name,age,location
//ANdrew is 27 and lives in philadelphia
// Increase age by 1 and print message again
let person={
    name : 'Harish',
    age: 22,
    location: 'Eluru'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age=22+1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)