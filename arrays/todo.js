
// create an aray with 5 todo's
// you have x todos
// print the first and second to last item -> Todo: walk to do
// Delete the third item
// Add a new Item onto the end
// Remove the first item from the list
//let todo=['complete courses','practise coding','learn projects workflow','apply for jobs','give interviews']
/*console.log(`you have ${todo.length} todos`)
console.log(` Todo : ${todo[0]}, ${todo[1]}, ${todo[2]}, ${todo[3]}, ${todo[4]} `)*/
//todo.splice(2,1)
//console.log(todo)
//todo.push('My new item onto the end')
//console.log(todo)
//todo.shift()
//console.log(todo)
//todo.forEach(function(todos,index){
//let num=index +1
//console.log(`${num}. ${todos}`)
//})
//for(let i=0;i<todo.length;i++)
//console.log(`${i+1}. ${todo[i]}`)

// 1.convert array to array of objects-> text, completed
//2. create function to remove a todo by text value

// deleteTodo(todos, 'buy food') console.log(todos)
let todoObj =[{
text : 'complete courses',
completed : true
},{
text : 'practise coding',
completed : false
},{
text : 'learn projects workflow',
completed : true
},{
text : 'apply for jobs',
completed : false
},{
text : 'give interviews',
completed : false
}]

let deleteTodo= function(todoObj,str){
let removetodo = todoObj.findIndex(function(todo){
 return todo.text.toLowerCase()===str.toLowerCase()
})
todoObj.splice(removetodo,1)
console.log(todoObj)
}
//deleteTodo(todoObj,'apply for jobs')
let todosRemaining = function(todoObj,completion){
   // return todoObj.filter(todo=>todo.completed=== completion)
   return todoObj.filter(function(todo, index){
       return todo.completed===completion
   })
}
//console.log(todosRemaining(todoObj,false))

let sortTodos = function(todoObj){
    todoObj.sort(function(a , b){
       /* if(a.completed===false && b.completed===true)
        return -1;
        else if(a.completed===true && b.completed===false)
        return 1;
        else 
        return 0; */

        if(a.text.toLowerCase() < b.text.toLowerCase())
        return -1;
        else if(a.text.toLowerCase() > b.text.toLowerCase())
        return 1;
        else 
        return 0;
    })
}
sortTodos(todoObj)
console.log(todoObj)