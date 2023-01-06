const fs = require('fs')
// const book = {
//     title: 'The Fault in our Stars',
//     author: 'John Green'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name)
console.log(data.planet)
console.log(data.age)

// console.log(JSON.stringify(data.name))
// console.log(JSON.stringify(data.planet))
// console.log(JSON.stringify(data.age))

// const newObject = {
//     name: 'Jean Rae',
//     planet: 'Mars',
//     age: 21,
// }

// const jsonString = JSON.stringify(newObject)
// console.log(jsonString)

// fs.writeFile('./1-json.json', JSON.stringify(newObject), err=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File successfully written!')
//     }
// })


