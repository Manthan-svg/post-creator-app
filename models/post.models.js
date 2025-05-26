const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    content: {
        type: String,
        required: true,
        minlength: [1, 'Content must be at least 1 character long'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]
})

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;