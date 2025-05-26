const express = require('express');
const {body , validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userModel = require('../models/users.models'); 
const jwt = require('jsonwebtoken');
const logoutMiddleware = require('../middlewares/logout.middleware');
const router = express.Router();

router.get('/register', (req, res) => { 
    res.render('register');
})

router.post('/register',
    body('username').trim().isLength({ min: 8 }).withMessage('Username must be at least 8 characters long'),
    body('password').trim().isLength({ min: 10 }).withMessage('Password must be at least 10 characters long'),
    body('email').trim().isEmail().withMessage('Please enter a valid email address'),
    body('age').isInt({ min: 18, max: 100 }).withMessage('You must be at least 18 years old and not exceed 100 years')
    ,async (req,res)=>{
    const {username,password,email,age} = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array(),
        message: 'Validation failed' });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
        age
    })

    const token = jwt.sign({username:username,userId:user._id},process.env.JWT_SECRET);

    res.cookie('token',token);

    res.redirect('/users/profile');
    
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login',
    body('username').trim().isLength({ min: 8 }).withMessage('Username must be at least 8 characters long'),
    body('password').trim().isLength({ min: 10 }).withMessage('Password must be at least 10 characters long')
    ,async (req,res)=>{
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array(),
        message: 'Validation failed' });
    }

    userModel.findOne({username:req.body.username}).then((user)=>{
        if(!user){
            return res.status(400).json({message: 'Invalid passowrd or username'});
        }
        bcrypt.compare(req.body.password,user.password).then((result)=>{
            if(!result){
                return res.status(400).json({message: 'Invalid password or username'});
            }

            const token = jwt.sign({username:user.username,userId:user._id},process.env.JWT_SECRET);

            res.cookie('token',token);

            res.redirect('/users/profile');
        })
    })

 })

router.get('/profile', logoutMiddleware.loginRequired, async (req, res) => {
    const user = await userModel.findById(req.user.userId).populate('posts');
    res.render('profile', { user });
})

router.get('/likes', logoutMiddleware.loginRequired, async (req, res) => {
    const user = await userModel.findById(req.user.userId).populate('posts');
    res.render('profile', { user });
})

router.get('/logout',(req,res)=>{
    res.cookie('token',"");
    res.redirect('/users/login');
})

module.exports = router;