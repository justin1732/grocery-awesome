//Dependencies
const express = require("express");

//Routing
const router = express.Router();

//Modelling
const Grocery = require("../../models");

//Getting all groceries
router.get('/', (req, res) => {
    Grocery.find()
    .sort({ date: -1 })
    .then((groceries) => res.json(groceries));
});

//Posting groceries
router.post('/', (req, res)=> {
    const newGrocery = new Grocery({
        name: req.body.name,
    })

    newGrocery.save()
        .then(grocery => res.json(grocery));
});

//Deleting groceries
router.delete('/:id', (req,res) => {
    Grocery.
    findbyId(req.params.id)
    .then((grocery) => grocery.remove().then(() => res.json({ success:true})))
    .catch((error) => res.status(404).json({ success: false}));
})

module.exports = router;
