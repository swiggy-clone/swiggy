const mongoose = require('mongoose');

const Dish = require('../dish');
const Restaurant = require('../restaurant');


const populateDishes = async() => {
    const dishes = [];
    for(let i = 0; i<10; i++){
        const dish = new Dish({
            name: `Dish${i}`,
            price: (i+1)*10,
            descirption: `Dish${i}`
        });
        await dish.save();
        console.log(`Created Dish${i}`);
        dishes.push(dish);
    }
    console.log(dishes);
    for(let i = 0; i<10; i++){
        const restaurant =  await Restaurant.findOneAndUpdate(
            {name: `Restaurant${i}`},
            {menu: dishes},
            {new: true}
        );
        console.log(restaurant);
        console.log(`Created restaurant${i}`);
    }
    
}
module.exports = populateDishes;