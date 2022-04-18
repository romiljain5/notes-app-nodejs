const chalk = require('chalk')
const getNotes = require('./notes.js')

// process.argv will give us an array, and then we choose 3rd element from that array which is 
// our argument
// if you pass more commands then it will be in this array too
const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    const addingNote = chalk.green.bold('Adding Note')
    // const addingNote = chalk.green.inverse.bold('Adding Note')
    console.log(addingNote)
} else if (command === 'remove') {
    const removingNote = chalk.red.bold('Removing Note')
    console.log(removingNote)
}