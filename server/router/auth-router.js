const express = require('express');
const router=express.Router();
// const {home,register}= require('../controllers/auth-controller')   //insted of this use below to not write it for whaterer you have exported or any variable is usesd
const authcontrollers= require('../controllers/auth-controller')



router.route("/").get(authcontrollers.home);


router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);


module.exports =router;