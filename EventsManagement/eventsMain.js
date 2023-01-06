const fs = require('fs');
const chalk = require('chalk');

const addNote = (title)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter( (note) => note.title === title)
    if(duplicateNotes.length === 0){
        notes.push({
            title: title
        })
        saveNotes(notes);
        console.log('\nNew Note Added Successfully!!!\n');
    }
    else{
        console.log("\nNote Title already existed!!!\n");
    }
}

const removeNote = (title) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found'));
    }

}

const listNotes = ()=>{
    const notes = loadNotes()
    
    console.log(chalk.cyan.inverse("All listings: ╰(*°▽°*)╯"));

    notes.forEach((note) => {
        console.log("Title : " + chalk.cyan(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green(note.title));
    }
    else{
        console.log(chalk.red.inverse("Note Not Found!"));
    }
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('events.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('events.json', dataJSON);
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}