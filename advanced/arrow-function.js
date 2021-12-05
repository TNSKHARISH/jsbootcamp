const square=(num) => num*num

console.log(square(5))

const squareLong=(num) =>{
    return num*num
    }
    
    const people =[{
        name : 'Andrew',
        age : 27
    },{
        name : 'vikram',
        age : 31
    },{
        name : 'Jess',
        age : 22
    }]
    const under30=people.filter(function(person){
        return person.age <30
    })

    const under30Long=people.filter((person)=>{
        return person.age <30
    })

    const under30Short = people.filter((person)=> person.age<30)

    console.log(under30)

    // 1. find the person with age 22
    const age22=people.find((person)=>person.age===22)
    console.log(age22)