// const square = function(x){
//     return x*x
// }
// console.log(square(3))

// const square = (x) =>{
//     return x*x
// }
// console.log(square(7))

// const square = (x) => x*x
// console.log(square(9))

// const event ={
//     name: 'Wedding',
//     printGuestList: function(){
//         console.log('Guest List for '+this.name)
//     }
// }
// event.printGuestList()

const event ={
    name: 'Wedding',
    guestList:['Vincent', 'AC', 'Paula'],
    printGuestList(){
        console.log('Guest List for '+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' +this.name)
        })
    }
}
event.printGuestList()

// const tasks ={
//     tasks: [{
//         text: 'Grocery shopping',
//         completed: true
//     },{
//         text: 'Clean yard',
//         completed: false
//     },{
//         text: 'Film course',
//         completed: false
//     }]
// }
// console.log(tasks.getTasksToDo())

const task = {
    tasks: [{ 
        text: 'grocery shopping', 
        completed: true 
    },{ 
        text: 'clean yard', 
        completed: false
    },{ 
        text: 'film course', 
        completed: false,
    }],
    getTaskTodo()
    {
      return this.tasks.filter((item) => !item.completed);
    }
  }
  
  console.log(task.getTaskTodo());