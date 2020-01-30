const mongoCollections = require("../config/mongoCollections");
const ObjectId = require("mongodb").ObjectId;
const animals = mongoCollections.animals;

module.exports = {

    
    async get(id){
        if(!id||id===undefined||!ObjectId.isValid(id))
        {
            throw "Invalid ID";
        }
        else
        {
        const animalCollection = await animals();
        const animalID = await animalCollection.findOne({ _id: ObjectId(id) });
        if(animalID === null)
        {
            throw "No animal of ID : " +id+ " is present in Animals";
        }
        return animalID;
        }
    },

    async getAll(){
        const animalCollection = await animals();
        const allAnimals = await animalCollection.find({}).toArray();
        return allAnimals;
    },
    
    async create(name, animalType){
        if (!name|| typeof name !== 'string')
        {
            throw "Animal name doesn't exist";
        }
        else if (!animalType || typeof animalType !== 'string')
        {
            throw "Animal Type is not proper";
        }    
        else
        {
            const animalCollection = await animals();

            let newAnimal = {
                                name: name,
                                animalType: animalType
                            };

            const insertInfo = await animalCollection.insertOne(newAnimal);
            if (insertInfo.insertedCount === 0)
            {
                throw "Could not add animal";
            }    
            const newId = insertInfo.insertedId;
            // const animal = await this.get(newId);
            // return animal;
            return await animalCollection.findOne({ _id: newId })
        }
    },

    async  remove(id){
        if(!id||id===undefined||!ObjectId.isValid(id))
        {
            throw "Invalid ID";
        }
    else{
        const animalCollection = await animals();
        const toberemoved = await animalCollection.findOne({ _id: ObjectId(id) });
        const animalDelete = await animalCollection.removeOne({_id : ObjectId(id) });
        if (animalDelete.deletedCount == 0)
        {
            throw "Animal of "+ id +" couldn't be deleted";
        }
        return toberemoved;
}
},

async  rename(id, newName){
    if(!id||id===undefined||!ObjectId.isValid(id))
    {
        throw "Invalid ID";
    }
    else if (!newName || typeof newName !== 'string'||newName.length === 0)
    {
        throw "Animal newName is not proper";
    }    
    else
    {
    const animalCollection = await animals();
    const renamedAnimal = await animalCollection.updateOne({_id : ObjectId(id) }, {$set:{name : newName}});
    if (renamedAnimal.modifiedCount === 0) 
    {
      throw "Animal of "+ id +" couldn't be renamed";
    }

    return await this.get(id);
}
}
};