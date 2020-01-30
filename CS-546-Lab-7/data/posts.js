const mongoCollections = require('./collections');
const posts = mongoCollections.posts;
const animal = mongoCollections.animals;
const ObjectId = require("mongodb").ObjectId;
const animals = require('./animals')

module.exports = {
  async getPostById(id){
    if(!id||typeof id !== 'string'||ObjectId.isValid(id) === false)
    {
    throw "The ID is not valid ";
    }
    else
    {
    const postCollection = await posts();
    const postID = await postCollection.findOne({ _id: ObjectId(id) });
    aid =  postID.author;
    const animalCollection = await animal();
    const animalID = await animalCollection.findOne({ _id: ObjectId(aid) });
    const newObj = { _id : ObjectId(aid) , name : animalID.name };
    postID.author = newObj;
    if(postID === null)
    {
        throw "No animal of ID : " +id+ " is present in Animals";
    }
    return postID;
    }
},
  async getAllPosts() {
    const postCollection = await posts();
    const allPosts = await postCollection.find({}).toArray();
    for(var i=0 ; i<allPosts.length ; i++)
        {
         aid =  allPosts[i].author;
         const animalCollection = await animal();
         const animalID = await animalCollection.findOne({ _id: ObjectId(aid) });
         const newObj = { _id : ObjectId(aid) , name : animalID.name };
         allPosts[i].author = newObj;
        }
    return allPosts;    
  },
  async addPost(title, author , content) {
    if (typeof title !== 'string') 
    throw 'No title provided';
    if (typeof content !== 'string') 
    throw 'I aint got content!';
    if (!author||typeof author !== 'string'||ObjectId.isValid(author) == false ||author===undefined||author===null) 
    throw 'I aint got an author!';

    const postCollection = await posts();

        const newPost = {
            title: title,
            author: author,
            content: content
        };
        const newInsertInformation = await postCollection.insertOne(newPost);
        const newId = newInsertInformation.insertedId;
        await animals.addPost(author , newId);
        return await postCollection.findOne({ _id: ObjectId(newId) });
  },
  async removePost(id) {
    if(!id||typeof id !== 'string'||ObjectId.isValid(id) === false)
    {
    throw "The ID is not valid ";
    }
    else
    {
    const postCollection = await posts();
    const postbyID = await postCollection.findOne({ _id: ObjectId(id) });
    const deletionInfo = await postCollection.removeOne({ _id: ObjectId(id) });
    if (deletionInfo.deletedCount === 0)
    {
       throw `Could not delete post with id of ${id}`;
    }   
    const deleteData = {
                        "deleted": true,
                        "data": postbyID
                       }

    const animalCollection = await animal();
    let pid = postbyID._id;
    let aid = postbyID.author;
    const deletionUpdate = await animalCollection.updateOne({ _id: ObjectId(aid) },{ $pull: { posts: pid }});
    if (!deletionUpdate.matchedCount && !deletionUpdate.modifiedCount) 
    {
          throw `Could not delete post with id of ${id} from animals`;
    }
    return deleteData;
  }
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
        const postsCollection = await posts();

        let postUpdateInfo = updateObj;

        const updatedPost = await postsCollection.updateOne({_id : ObjectId(id) }, {$set:postUpdateInfo});
    if (updatedPost.modifiedCount === 0) 
    {
        throw "Post of "+ id +" couldn't be updated";
    }

    return await this.getPostById(id);
}
}
};