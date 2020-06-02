const express = require("express");
const UserRouter = express.Router(); //this is the users router, inside this, there will be routes
const bcrypt = require("bcryptjs");
const config = require('config');
const jwt = require('jsonwebtoken');


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

    const{ name, password } = request.body;

    if( !name || !password){
        return response.status(400).json({msg: "Please enter all fields"});
    }
    
    User.findOne({name}).then(
        user => {
            if( user ) response.status(400).json({msg: "User already exists"});

            const newUser = new User({
                name,
                password
            });

            //Create Salt & Hash

            bcrypt.genSalt(10, ( errror, salt ) =>{
                bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if( err ) throw err;
                    newUser.password = hash;
                    newUser.save().then( newUserSaved => {

                        jwt.sign(
                            { id: newUserSaved.id },
                            config.get('jwtSecret'),
                            {expiresIn: 3600 },
                            (err, token) => {
                                if(err) throw err;

                                response.json({
                                    token,
                                    user:{
                                        id: newUserSaved.id,
                                        name: newUserSaved.name,
                                    }
                                })
                            }
                        )
                    });
                })
            })

        }
    )

    // newUser.save().then( newUserSaved => response.json(newUserSaved) );
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

