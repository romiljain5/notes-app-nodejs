const chalk = require('chalk')
const getNotes = require('./notes.js')

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    const addingNote = chalk.green.bold('Adding Note')
    // const addingNote = chalk.green.inverse.bold('Adding Note')
    console.log(addingNote)
} else if (command === 'remove') {
    console.log('Removing note!')
}