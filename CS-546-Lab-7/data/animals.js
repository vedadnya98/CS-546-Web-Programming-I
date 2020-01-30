const mongoCollections = require("./collections");
const ObjectId = require("mongodb").ObjectId;
const animals = mongoCollections.animals;
const posts = mongoCollections.posts;

module.exports = {   
    async get(id){
        if(!id||typeof id !== 'string'||ObjectId.isValid(id) == false ||id===undefined||id===null)
        {
        throw "The ID is not valid";
        }
        else
        {   
        const animalCollection = await animals();
        const animalID = await animalCollection.findOne({ _id: ObjectId(id) });
        const totalPosts = animalID.posts.length;
        j=0;
            while(j<totalPosts)
            {
                let pid = animalID.posts[j].id;
                const postCollection = await posts();
                const postObj = await postCollection.findOne({ _id: ObjectId(pid)});
                newObj = { _id : ObjectId(pid) , title : postObj.title }
                animalID.posts[j] = newObj; 
                j++;
            }
            return animalID;
        }
    },
    async getAll(){
        const animalCollection = await animals();
        const allAnimals = await animalCollection.find({}).toArray();
        for(var i=0 ; i<allAnimals.length ; i++)
        {
            const totalPosts = allAnimals[i].posts.length;
            j=0;
            while(j<totalPosts)
            {
                pid = allAnimals[i].posts[j].id;
                const postCollection = await posts();
                const postObj = await postCollection.findOne({ _id: ObjectId(pid)});
                newObj = { _id : ObjectId(pid) , title : postObj.title }
                allAnimals[i].posts[j] = newObj; 
                j++;
            }
        }
        return allAnimals;
    },
    
    async postAnimal(name, animalType){
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
                                animalType: animalType,
                                posts : [],
                                likes : []
                            };

            const insertInfo = await animalCollection.insertOne(newAnimal);
            if (insertInfo.insertedCount === 0)
            {
                throw "Could not add animal";
            }    
            const newId = insertInfo.insertedId;
            return await animalCollection.findOne({ _id: newId })
        }
    },

    async addPost(animalId , postId){
        const animalCollection = await animals();
        const updatedAnimal = await animalCollection.updateOne(
            { _id: ObjectId(animalId) },
            {$addToSet: {posts: postId}}
          );
        if (updatedAnimal.modifiedCount === 0) 
            {
                throw "Animal of "+ id +" couldn't be updated";
            } 
        return await this.get(animalId);  
    },

    async remove(id) {

        if(!id||typeof id !== 'string'||ObjectId.isValid(id) == false ||id===undefined||id===null)
        {
                throw "The ID is not valid";
        }

        const animalCollection = await animals();
        const postCollection = await posts();
        const toberemoved = await animalCollection.findOne({ _id: ObjectId(id) });
        let allPosts = [];
        allPosts = toberemoved.posts;
        for (var i = 0; i < allPosts.length; i++) 
        {
            const deletedPosts = await postCollection.removeOne({ _id: ObjectId(allPosts[i]) })
        }
        const deleteInfo = await animalCollection.removeOne({ _id: ObjectId(id) });
        if (deleteInfo.deletedCount === 0) 
        {
            throw "Animal of "+ id +" couldn't be deleted";
        }

        const deletedAnimal = {
                        "deleted": true,
                        "data": toberemoved
                      }

        return deletedAnimal;
    },

    async update(id, updateObj){
           
            if(!id||typeof id !== 'string'||ObjectId.isValid(id) == false ||id===undefined||id===null)
            {
                throw "The ID is not valid";
            }
            else if (!updateObj || typeof updateObj !== 'object'||updateObj.length === 0)
            {
                throw "Parameter to be updated not proper";
            }    
            else
            {
                const animalCollection = await animals();

                let animalUpdateInfo = updateObj;

                const updatedAnimal = await animalCollection.updateOne({_id : ObjectId(id) }, {$set:animalUpdateInfo});
            if (updatedAnimal.modifiedCount === 0) 
            {
                throw "Animal of "+ id +" couldn't be updated";
            }

            return await this.get(id);
        }
}

//async like

};