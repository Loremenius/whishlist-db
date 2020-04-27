const userDb = require('../user/user-model');

module.exports = (req, res, next) => {
    console.log('checking for valid gift with given id');

    userDb.getGift(req.params.gift_id) 
        .then(data=>{
            if (data){
                req.gift = data
                next();
            }else{
                res.status(404).json({message:`No gift with id: ${req.params.gift_id}`})
            }
        })
}