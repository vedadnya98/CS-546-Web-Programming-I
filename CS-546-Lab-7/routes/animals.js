const express = require("express");
const router = express.Router();
const data = require('../data');
const animalsData = data.animals;

router.get("/", async (req, res) => {
    try 
    {
        const getAll = await animalsData.getAll();
        res.status(200).json(getAll);
    } 
    catch (e) 
    {
        res.status(404).json({error: 'Animals not found'});
    }
});

router.post('/', async (req, res) => {
    const animalPostData = req.body;
    if (!animalPostData) {
        res.status(400).json({error: 'You must provide data to update an Animal'});
        return;
    }

    if (!animalPostData.name) {
        res.status(400).json({error: 'You must provide a name'});
        return;
    }

    if (!animalPostData.animalType) {
        res.status(400).json({error: 'You must provide a animalType'});
        return;
    }
    try {
      const {name, animalType} = animalPostData;
      const newPost = await animalsData.postAnimal(name, animalType);
      res.status(200).json(newPost);
    } 
    catch (e) 
    {
        res.status(400).json({error: "Animal couldn't be added"});
    }
    });

router.get("/:id", async (req, res) => {
    try 
    {
        const getbyID = await animalsData.get(req.params.id);
        res.status(200).json(getbyID);
    } 
    catch (e) 
    {
        res.status(404).json({error: 'Animal not found'});
    }
    });
router.put("/:id", async (req, res) => {
    let animalUpdate = req.body;

    if (!animalUpdate) {
        res.status(400).json({error: 'You must provide data to update an Animal'});
        return;
    }

    if (!animalUpdate.name && !animalUpdate.animalType) {
        res.status(400).json({error: 'You must provide a name or animalType'});
        return;
    }
    // try 
    // {
    //     const putbyID = await animalsData.get(req.params.id);
    //     res.json(putbyID);
    // } 
    // catch (e) 
    // {
    //     res.status(404).json({error: 'Animal not found'});
    // }
    try
    {
        const updatedAnimal = await animalsData.update(req.params.id, animalUpdate);
        res.json(updatedAnimal);
    }
    catch (e) 
    {
        res.status(404).json({error: 'Animal not found'});
    }
    }); 
router.delete("/:id", async (req, res) => {
    try 
    {
        const deletebyID = await animalsData.remove(req.params.id);
        res.json(deletebyID);
    } 
    catch (e) 
    {
        res.status(404).json({error: 'Animal not found'});
    }
    });     

module.exports = router;