const mongoCollections = require("./config/mongoCollections");
const ObjectId = require("mongodb").ObjectId;
const todoItems = mongoCollections.todoItems;


module.exports ={
async createTask(title, description){
    if (!title|| typeof title !== 'string'||title.length === 0)
    {
        throw "Title is not proper";
    }
    else if (!description || typeof description !== 'string'||description.length === 0)
    {
        throw "Description is not proper";
    }    
    else
    {
        // const todoItems = await todoItems();
        const todoCollection = await todoItems();

        let newTodo = {
                        title: title,
                        description: description,
                        completed: false,
                        completedAt: null
                      };

        const insertTodo = await todoCollection.insertOne(newTodo);
        if (insertTodo.insertedCount === 0)
        {
            throw "Could not add a Todo";
        }    
        const newId = insertInfo.insertedId;
        return await todoCollection.findOne({ _id: newId })
    }
},
async getAllTasks(){
    const todoCollection = await todoItems();
    const allTodo = await todoCollection.find({}).toArray();
    return allTodo;
},
async getTask(id){
    if(!id||id===undefined)
    {
        throw "Invalid ID";
    }
    else
    {
    const todoCollection = await todoItems();
    const todoID = await todoCollection.findOne({ _id: ObjectId(id) });
    if(todoID === null)
    {
        throw "No todo of ID : " +id+ " is present in TodoList";
    }
    return todoID;
    }  
},
async completeTask(taskId){
    if(!taskId||taskId===undefined)
    {
        throw "Invalid ID";
    }
    else
    {
    const todoCollection = await todoItems();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const completeTodo = await todoCollection.updateOne({_id : ObjectId(taskId) }, {$set:{completed : true , completedAt : time}});
    if (completeTodo.modifiedCount === 0) 
    {
      throw "Todo of "+ taskId +" couldn't be updated";
    }

    return await todoCollection.findOne({ _id: ObjectId(taskId) });
}
},
async removeTask(id){
    const todoCollection = await todoItems();
    if(!id||id===undefined)
    {
        throw "Invalid ID";
    }
else{
    const toberemoved = await todoCollection.findOne({ _id: ObjectId(id) });
    const todoDelete = await todoCollection.removeOne({_id : ObjectId(id) });
    if (todoDelete.deletedCount == 0)
    {
        throw "Todo of "+ id +" couldn't be removed";
    }
    return toberemoved;
}
}
}