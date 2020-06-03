const express = require("express");
const AuthRouter = express.Router(); //this is the users router, inside this, there will be routes
const bcrypt = require("bcryptjs");
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth'); //used to constantly verify looged in person, as jwt is stateless


//User Model, to make queries, we need it
const User = require('../../models/User'); //this is the model


//@UsersRoute Post api/auth
//@desc Auth user
//@access public

AuthRouter.post('/', (request, response) => {

    const{ name, password } = request.body;

    if( !name || !password){
        return response.status(400).json({msg: "Please enter all fields"});
    }
    
    User.findOne({name}).then(
        user => {
            if( !user ) response.status(400).json({msg: "Invalid credentials"});

            //Validate password

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch)    return response.status(400).json({msg: "Invalid credentials"});

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        {expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            response.json({
                                token,
                                user:{
                                    id: user.id,
                                    name: user.name,
                                }
                            })
                        }
                    )
                })
        }
    )

    // newUser.save().then( newUserSaved => response.json(newUserSaved) );
});

//@UsersRoute Get api/auth/user
//@desc get user data
//@access private
// use middleware here (auth)
AuthRouter.get( "/user", auth, (request, response) => {

    User.findById(request.user.id)
        .select("-password")
        .then(user => response.json(user));

});




module.exports = AuthRouter;

