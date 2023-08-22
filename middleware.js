const path = require("path");
const publicPath = path.join(__dirname,"public");
const express = require("express")
const app = express();
app.use(express.static(publicPath));

// yaha pr public path zaroori h kio k mene niche use kya hua h
const middleware = (req,res,next)=>{
    const username = req.query.username;
    const password = req.query.password;

    if (!username || (username !== "talha" || password !== "123")) {
       res.sendFile(`${publicPath}/index2.html`)
//    res.render("/index2")    
} else {
        next();
    }
}
module.exports = middleware;