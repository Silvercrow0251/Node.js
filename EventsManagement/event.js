const yargs = require('yargs');
const notes = require('./eventsMain.js');

yargs.command({
    command : 'add',
    describe: "Add a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title);		
    }
})

yargs.command({
    command : 'remove',
    describe: "Remove a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);		
    }
})

yargs.command({
    command : 'list',
    describe: "List a Note",
    handler: function(argv){
        notes.listNotes();		
    }
})

yargs.command({
    command : 'read',
    describe: "Reading a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);		
    }
})

yargs.parse();