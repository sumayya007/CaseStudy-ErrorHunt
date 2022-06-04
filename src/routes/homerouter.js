const express = require('express'); 
const homeRouter = express.Router();//part1 point5 homeroute changed to homerouter

homeRouter.get('/',function(req,res){

    res.render('home',{});
    
})







module.exports = homeRouter;