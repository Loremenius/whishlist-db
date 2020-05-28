const db = require('../user/user-model');
module.exports = (req, res, next) => {
    console.log('checking for existing user in database');
    db.findByName(req.body.username)
        .then(data=>{
            if (!!data) res.status(400).json({ message:'Username has already been taken' });
            else next();
        })
}