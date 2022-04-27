//Dependencies
const express = require ("express");
const app = express();
// const path = require ("path");
const PORT = process.env.PORT || 3001;
const mongoose = require ("mongoose");
// const axios = require("axios");

//Routing
const grocery = require("./routes/api/grocery")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/api/grocery', grocery);

//environment variables
// const dotenv= require ('dotenv').config();

//Serving up static Assets
if (process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
}

//Connecting to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/grocery";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log("Database connected part 1!")
})
// .then(() => console.log("Database connected part 2!"))
// .catch(err => console.log(err));

//Last request to send to get the ServerJS running
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
//Listening for the PORT
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})
