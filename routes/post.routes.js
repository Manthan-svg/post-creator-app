const express = require('express');
const logoutMiddleware = require('../middlewares/logout.middleware');
const postModel = require('../models/post.models');
const userModel = require('../models/users.models');
const router = express.Router();


router.post('/post',logoutMiddleware.loginRequired,async (req,res)=>{
    const user = await userModel.findById(req.user.userId);

    const {content} = req.body;

    const post = await postModel.create({
        user:user._id,
        content
    });

    user.posts.push(post._id);
    await user.save();

    res.redirect('/users/profile'); 
})


router.get('/like/:id',logoutMiddleware.loginRequired,async (req,res)=>{
    const post = await postModel.findById(req.params.id).populate('user');

    if(post.likes.indexOf(req.user.userId) == -1){
        post.likes.push(req.user.userId);
    }else{
        const index = post.likes.indexOf(req.user.userId);
        post.likes.splice(index, 1);
    }

    await post.save();

    res.redirect('/users/profile');
})

router.get('/update/:id',logoutMiddleware.loginRequired,async (req,res)=>{
    const post = await postModel.findById(req.params.id);
    res.render('editPost', { post });
})


router.post('/edit/:id',logoutMiddleware.loginRequired,async (req,res)=>{
    const post  = await postModel.findOneAndUpdate(
        {_id:req.params.id},    
        {content:req.body.content},
    );
    res.redirect('/users/profile');

})




module.exports = router;