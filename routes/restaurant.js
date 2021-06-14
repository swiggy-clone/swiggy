const express = require('express');
const Restaurant = require('../models/restaurant');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router.get('/', catchAsync(async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
}));
router.get('/:id', catchAsync(async (req, res) =>{
    const {id} = req.params;
    const restaurant = await Restaurant.findById(id);
    if(!restaurant){
        res.json({error: 'The user does not exist'});
    }
    res.json(restaurant);
}));
router.delete('/:id', catchAsync(async (req, res) =>{
    const {id} = req.params;
    const restaurant = await Restaurant.findById(id);
    if(!restaurant){
        res.json({error: 'The user does not exist'});
    }
    await estaurant.findByIdAndDelete(id);
    res.json({success: 'User deleted!'});
}));

module.exports = router;