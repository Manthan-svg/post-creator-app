const jwt = require('jsonwebtoken');

module.exports.loginRequired = (req,res,next) =>{
    if(!req.cookies.token){
        return res.redirect('/users/login');
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'});
    }
}