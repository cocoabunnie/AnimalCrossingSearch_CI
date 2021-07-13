const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const CritterModel = require('./models/critterModel');

//Adding the middleware
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(cors());
app.use(express.json());

//Getting info from the api I'm using and consol log it 
app.get('/bugInfo', async (request, response) => {
  const api_url = process.env.ACNH_API;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
})

//Allowing to delete
app.delete('/delete/:id', async (req, res) =>{
  const id = req.params.id;
  await CritterModel.findByIdAndRemove(id).exec();
  res.send("item deleted");
})

//Connecting to mongoose
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
app.use("/", require("./routes/critterRoute"));

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});