const mongoose = require('mongoose');
const Restaurant = require('../restaurant');

const populateRestaurants = async () =>{
    for(let i = 0; i<10; i++){
        const restaurant = {
            name: `Restaurant${i}`,
            address: `address${i}`,
            description: 'Great Restaurant',
            location: `location${i}`,
            username: `admin${i}`,
            password: `password${i}`,
        }
        const new_restaurant = new Restaurant(restaurant);
        await new_restaurant.save();
        console.log(`Created ${i} restaurant`);
    }
}

module.exports = populateRestaurants;
