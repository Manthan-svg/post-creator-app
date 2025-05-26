const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({ 
    username:{
        type: String,
        required: true,
        unique: true,
        minlength:[8,'Username must be at least 8 characters long'],
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minlength: [10, 'Password must be at least 8 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'You must be at least 18 years old'],
        max: [100, 'Age cannot exceed 100 years'],
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;