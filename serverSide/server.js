const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const UsersApi = require("./routes/api/users");

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

// Db Configuration
const db = require("./config/keys").mongoURI;

//Connect to Mongo DB
mongoose.connect(db)
        .then( () => console.log("===================================\n|Mongo DB connected successfully...\n==================================="))
        .catch( err => console.log(err));

//Use Routes
app.use('/api/users', UsersApi);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`)); 




