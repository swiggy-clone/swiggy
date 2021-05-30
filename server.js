const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.listen(port,(err)=>{
  if(err)
  console.log(err);
  else {
    console.log(`listening at ${port}`);
  }
})
