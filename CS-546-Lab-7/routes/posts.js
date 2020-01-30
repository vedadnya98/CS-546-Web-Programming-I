const express = require("express");
const router = express.Router();
const data = require('../data');
const postsData = data.posts;

router.get("/", async (req, res) => {
    const getAllPosts = await postsData.getAllPosts();
    res.json(getAllPosts);
});

router.post("/", async (req, res) => {
    let newPost = req.body;
    if (!newPost) {
        res.status(400).json({error: 'You must provide data to create an Animal'});
        return;
      }
    
      if (!newPost.title) {
        res.status(400).json({error: 'You must provide a title'});
        return;
      }

      if (!newPost.author) {
        res.status(400).json({error: 'You must provide an author'});
        return;
      }
    
      if (!newPost.content) {
        res.status(400).json({error: 'You must provide some content'});
        return;
      }

      try {
        const newPostObj = await postsData.addPost(req.body.title, req.body.author , req.body.content);
        res.status(200).json(newPostObj);
      } catch (e) {
        res.status(400).json({error: 'Post not added'});
      }
    });    

    router.get("/:id", async (req, res) => {
        try 
        {
            const getbyID = await postsData.getPostById(req.params.id);
            res.status(200).json(getbyID);
        } 
        catch (e) 
        {
            res.status(404).json({error: 'Post not found'});
        }
        });
    
        
router.put("/:id", async (req, res) => {
    let postUpdate = req.body;
    if (!postUpdate) {
        res.status(400).json({error: 'You must provide data to update an Animal'});
        return;
    }

    if (!postUpdate.title && !postUpdate.content) 
    {
        res.status(400).json({error: 'You must atleast provide a title or content'});
        return;
    }
    // try 
    // {
    //     const getbyID = await postsData.getPostById(req.params.id);
    //     res.status(200).json(getbyID);
    // } 
    // catch (e) 
    // {
    //     res.status(404).json({error: 'Post not found'});
    // }
    try
    {
        const updatedPost = await postsData.update(req.params.id, postUpdate);
        res.json(updatedPost);
    }
    catch (e) 
    {
        res.status(404).json({error: 'Post not found'});
    }
    });  
router.delete("/:id", async (req, res) => {
    try
    {
        const updatedPost = await postsData.removePost(req.params.id);
        res.json(updatedPost);
    }
    catch (e) 
    {
        res.status(404).json({error: e});
    }
    });     

module.exports = router;