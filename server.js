require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// Need to Install cors Later

// Connect to MongoDB
const app = express();
mongoose.connect(process.env.DATABASE_URL, err => {
    if(err)
        console.log("There was an error connecting to MongoDB: " + err);
    else    
        console.log("Connected to MongoDB")
})
const PORT = 5000

// Server accepts JSON body
app.use(express.json());

app.listen(PORT, () => console.log("API is Running on PORT " + PORT))