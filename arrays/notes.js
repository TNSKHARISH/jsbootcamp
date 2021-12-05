const notes =['Note 1','Note 2','Note 3']
//notes.push('My new node')

//console.log(notes.shift())
//notes.unshift('My first node')
//console.log(notes.pop())
//notes.splice(1,1)
//notes.splice(1,0,'This is my new note')
//notes.splice(1,1,'This is my new note 2')
//console.log(notes.length)
//console.log(notes)
notes.forEach(function(item, index){
console.log(item)
console.log(index)
})

for(let i=0;i<notes.length;i++)
console.log(`${i+1}. ${notes[i]}`)


const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'eating'))

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'some other office modification')
console.log(note)