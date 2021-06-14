const mongoose = require('mongoose');


const populateUsers = async () => {
    for(let i = 0; i<10; i++){
      const user = new User();
      user.name = 'Saitama';
      await user.save();
      console.log(`Created ${i} user`);
    }
}

module.exports = populateUsers;