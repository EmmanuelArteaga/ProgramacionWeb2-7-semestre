const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/CodigoQRyCalculadora', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/index.html'))
});

router.get('/calculadora', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'))
});

router.get('/generadorqr', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/generadorqr.html'))
});

router.get('/calculadora.css', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.css'))
});
router.get('/generadorqr.css', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/generadorqr.css'))
});


router.get('/app.js', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/app.js'))
});

router.get('/app2.js', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public','/app2.js'))
});



module.exports=router;