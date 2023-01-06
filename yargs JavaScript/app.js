const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

//add, remove, read, list

//add
yargs.command({
    command: 'add',
    describe: 'Buy a soda',
    builder: {
        title: {
            describe: 'Coca Cola',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title: ' + argv.title)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Get rid of can',
    handler: function(){
        console.log('Throw can in trash bin!')
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'How much did the soda cost?',
    handler: function(){
        console.log('Check receipt!')
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'How much money do I have left?',
    handler: function(){
        console.log('Check wallet!')
    }
})

console.log(yargs.argv)