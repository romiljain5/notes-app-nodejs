const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// process.argv will give us an array, and then we choose 3rd element from that array which is 
// our argument
// if you pass more commands then it will be in this array too
const command = process.argv[2]

// console.log(process.argv)


//created add command with yargs
yargs.command({
    'command':'add',
    'describe':'adds a note',
    // builder is used to add additional commands - node app.js add --title="shopping list" --body="my new note"
    builder: {
        'title':{
            'describe':'Note title',
            // below option will set it as required, so only add will not work
            // need to write full - node app.js add --title="Shopping list"
            'demandOption':true,
            'type':'string'
        },
        'body':{
            'describe':'Note content',
            'demandOption':true,
            'type':'string'
        }
    },
    // passing argument i.e. argv will give us input of command from handler
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//created remove command
yargs.command({
    'command':'remove',
    'describe':'To remove note',
    builder: {
        'title':{
            'describe':'Note title',
            'demandOption':true,
            'type':'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//created list command
yargs.command({
    'command':'list',
    'describe':'To list notes',
    handler: function(){
        console.log(chalk.cyan('Listing note'))
    }
})

//created read command
yargs.command({
    'command':'read',
    'describe':'To read notes',
    handler: function(){
        console.log(chalk.magenta('Reading note'))
    }
})

// console.log(yargs.argv)
yargs.parse()

