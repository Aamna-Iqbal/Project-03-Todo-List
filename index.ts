#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todo_list:string[]= [];
let conditions = true;
console.log(chalk.cyanBright.bold("\n Welcome to Todo List Application"));
//while(conditions){
// let addTodolist = await inquirer.prompt([
//     {
//        name:"todolist" ,
//        type:"input",
//        message:"Enter your task in the todo list application:"
    
//     }
// ])
// todo_list.push(addTodolist.todolist)
// console.log(`${addTodolist.todolist} Your task is added in the Todo List Application successfully`)
// let addMoretodolist = await inquirer.prompt(
//     [{
//         name:"addMore",
//         type:"confirm",
//         message:"Do you want to add more task in the Todo list application",
//         default:"false",
//     }]
// );
// conditions = addMoretodolist.addMore
//}
//console.log("Your Todo_list is updated", todo_list )
let main = async () => {
    while(conditions){ 
            let option = await inquirer.prompt([
        {
            name:"choice",
            type:"list",
            message:"Select an option you want to do",
            choices:["Add Task", "Delete Task", "Update Task", "View Todo List", "Exit"],

        }
    ])
    if(option.choice ==="Add Task"){
        await addTask()
    }
    else if(option.choice === "Delete Task"){
        await deleteTask()
    }
    else if(option.choice === "Update Task"){
        await updateTask()
    }
    else if(option.choice === "View Todo List"){
        await viewTask()
    }
else if(option.choice === "Exit"){
    conditions = false;


}}
}
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task",

        }
    ])
    todo_list.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);

}
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todo_list.forEach((task, index) =>{
    console.log(`${index + 1}: ${task}`)

    })
}
//Funtion to delete a task from list
let deleteTask = async() => {
 await viewTask()
 let taskIndex = await inquirer.prompt([
    {
        name:"index",
        type:"number",
        message:"Enter 'index no.' of the task you want to delete:"
    }
 ])
 let deletedTask = todo_list.splice(taskIndex.index - 1 , 1);
 console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo List \n`)


}
//Function to update a task
main();
let updateTask = async () =>{
await viewTask()
let update_task_index = await inquirer.prompt([
    {
        name:"index",
        type:"number",
        message:"Enter the 'index no' of the task you want to update:"
    },
    {
        name:"new_task",
        type:"input",
        message:"Now Enter new task name:"
    }
])
todo_list[update_task_index.index -1] = update_task_index.new_task
console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully[For updated list check option:"View Todo list"]`)
}
