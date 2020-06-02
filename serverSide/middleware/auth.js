const config = require('config');
const jwt = require('jsonwebtoken');

//the aim of a middleware is to get request, do whatever,
//return a response and then go next
function auth(request, response, next){
    const token = request.header("x-auth-token");

    //check for token

    if( !token ) return response.status(401).json({msg: "User is not authorized, no token"});

    try{
        //Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //Add user from payload
        request.user = decoded;
        next();
    }
    catch(e){
        response.status(400).json({msg: "Token is not valid."});
    }

}

module.exports = auth;