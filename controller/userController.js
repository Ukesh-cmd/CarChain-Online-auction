const User = require('../models/userModel');
const Product = require('../models/productModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loadRegister= (req, res)=>{
    try {
        res.render('register')
        
    } catch (error) {
        console.log(error.message);
    }
}
const register = async(req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('register', {message:errors.array()});
    }
    try{
        const { name, email, password } = req.body;
        const checkUser = await User.findOne({email:email});
        if(checkUser){
            res.render('register', {ermessage: 'Email already Exist'});
        }
        else{
            const bcryptPassword = await bcrypt.hash(password, 10);
            const userRegister = new User({
                name: name,
                email: email,
                password: bcryptPassword
            });
            const response = await userRegister.save();
        
            if(response){
                res.redirect('/');
            }
            else{
                res.render('register', {ermessage:'Something went wrong'});
            }
        }
        

    }
    catch(error){
        console.log(error.message);
    }
}

const loadLogin = (req, res)=>{
    try {
        res.render('login')
    } catch (error) {
        console.log(error.message);
    }
}
const login = async(req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email:email});
        if(user){
            const comparePassword = await bcrypt.compare(password, user.password);
            if(comparePassword){
                const token = generateToken(user._id);
                res.redirect('/dashboard');
            }
            else{
                res.render('/', {message:"Email or Password is incorrect"});
            }
        }
        else{
            res.render('/', {message:"Email or Password is incorrect"});
        }
    } catch (error) {
        console.log(error.message);
    }
}

const generateToken = (userId)=>{
    return jwt.sign({id:userId}, JWT_SECRET_USER, {expiresIn: '1hr'});
}


const loadDashboard = (req, res)=>{
    try {
        res.render('dashboard')
    } catch (error) {
        console.log(error.message);
    }
}

const loadseller = (req, res)=>{
    try {
        res.render('seller')
    } catch (error) {
        console.log(error.message);
    }
}
const seller = async(req, res) =>{
    try {
        const product = new Product({
            carBrand : req.body.carbrand,
            carModel : req.body.carmodel,
            vin : req.body.vin,
            cylinder : req.body.cylinder,
            carColor : req.body.carcolor,
            carEngine : req.body.carengine,
            carCondition : req.body.carcondition,
            carPrice : req.body.price,
            // carImage : 'images/'+req.file.fileName
        });
        const response = await product.save();
        if(response){
            return res.status(200).json({
                msg: 'added successfully'
            });
        }else{
            return res.status(400).json({
                msg: 'Error'
            });
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports={
    loadLogin,
    loadRegister,
    loadDashboard,
    register,
    login,
    seller,
    loadseller
}