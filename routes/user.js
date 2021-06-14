const express = require('express');
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

/*router.get('/', catchAsync(async (req, res) => {
    const users = await User.find();
    res.json(users);
}));*/
router.get('/', catchAsync(async (req, res) =>{
    const {page} = req.query;
    const current_page = {};
    const size = parseInt(page.size);
    if(size < 0){
        res.status(400).json({error: 'Invalid page size!'});
    }
    if('after' in page){
        if(page.after === "-1"){
            current_page.data = await User.find().limit(size+1).lean();
            if(current_page.data.length <= size){
                current_page.next = -1;
                current_page.prev = -1;
            } else {
                const last_element = current_page.data.pop();
                console.dir(last_element);
                current_page.next = last_element._id;
                current_page.prev = -1;
            }
        } else {
            current_page.data = await User.find({_id: {$gte:page.after}}).limit(size+1);
            if(current_page.data.length <= size){
                current_page.next = -1;
                
            } else {
                const last_element = current_page.data.pop();
                current_page.next = last_element._id;
            }
            current_page.prev = page.after;
        }
    } else {
        if(page.before === "-1"){
            current_page.data = await User.find().limit(size+1);
            if(current_page.data.length <= size){
                current_page.next = -1;
                current_page.prev = -1;
            } else {
                const last_element = current_page.data.pop();
                current_page.next = last_element._id;
                current_page.prev = -1;
            }
        } else {
            current_page.data = await User.find({_id: {$lt:page.before}}).limit(size+1);
            if(current_page.data.length <= size){
                current_page.prev = -1;
            } else {
                const first_element = current_page.data.splice(0, 1)[0];
                current_page.prev = first_element._id;
            }
            current_page.next = page.before;
        }
    }
    res.json(current_page);
}));
router.get('/:id', catchAsync(async (req, res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        res.json({error: 'The user does not exist'});
    }
    res.json(user);
}));
router.delete('/:id', catchAsync(async (req, res) =>{
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        res.json({error: 'The user does not exist'});
    }
    await User.findByIdAndDelete(id);
    res.json({success: 'User deleted!'});
}));
module.exports = router;