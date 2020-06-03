const express = require("express");
const UserRouter = express.Router(); //this is the users router, inside this, there will be routes

//User Model, to make queries, we need it
const User = require('../../models/User'); //this is the model

//@UsersRoute Get api/users
//@desc get all users here
//@access public( should be private )

UserRouter.get('/', (request, response) => {
    User.find()
        .sort({date: -1})
        .then(users => response.json(users) );
});

//@UsersRoute Post api/users
//@desc create a new user here
//@access public( should be private )

UserRouter.post('/', (request, response) => {
    const newUser = new User({
        name: request.body.name,
        password: request.body.password
    });

    newUser.save().then( newUserSaved => response.json(newUserSaved) );
});

//@UsersRoute Delete api/users/:userId
//@desc create a new user here
//@access public( should be private )

UserRouter.delete('/:userId', (request, response) => {
    User.findById(request.params.userId)
        .then( deleteThisUser => deleteThisUser.remove()
                                                .then( () => response.json({deletion: true})) 
        ).catch( error => response.status(404).json({deletion: false}));
        
});




module.exports = UserRouter;

