const todoItems = require("./todo");
const connection = require("./config/mongoConnection");

async function main() {
    try{
    const createdTask = await todoItems.createTask("My First Task", "This is the first thing I need to do today");
    console.log(createdTask);
    }
    catch(error)
    {
        console.log(error);
    }

    try{
        const createdTask2 = await todoItems.createTask("My Second Task", "This is the second thing I need to do today");
        console.log(createdTask2);
        }
        catch(error)
        {
            console.log(error);
        }

    try{
        const getTasks = await todoItems.getAllTasks();
        console.log(getTasks);
        }
        catch(error)
        {
            console.log(error);
        }

        try{
            const task = await todoItems.getTask("");
            console.log(task);
        }
        catch(error)
        {
            console.log(error);
        }

        try{
            const task = await todoItems.getTask("");
            const finishedTask = await todoItems.completeTask(task._id); 
            console.log(finishedTask);
        }
        catch(error)
        {
            console.log(error);
        }

        try{
            const removeTask = await todoItems.removeTask("");
        }
        catch(error)
        {
            console.log(error);
        }



        try
        {
        const db = await connection();
        await db.serverConfig.close();
        }
        catch(error)
        {
            console.log(error)
        }

}

main();