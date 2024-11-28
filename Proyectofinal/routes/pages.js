const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/edit', (req, res) =>{
    res.render(path.join(__dirname,'../views','/edit.ejs'))
});


router.get('/agregar', (req, res) =>{
    res.render(path.join(__dirname,'../views','/agregar.ejs'))
});

router.get('/style.css', (req, res) =>{
    res.sendFile(path.join(__dirname,'../estilos','/style.css'))
});

module.exports=router;