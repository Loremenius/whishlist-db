const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const userDb = require('./user-model')

const AuthorizeAction = require('../middleware/AuthorizeAction');
const VerifyGift = require('../middleware/VerifyGift');


router.put('/:id', AuthorizeAction, (req,res)=>{
    req.body.username = req.body.username.toLowerCase();
    req.body.password = bcrypt.hashSync(req.body.password,8);
    userDb.editUser(req.body)
        .then(data=>{
            console.log("update success",data)
            if(data){
                res.status(201).json({message:"User updated sucessfully!"});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating user'
            });
        })
});

router.get('/:name', (req,res)=>{
    userDb.findByName(req.params.name.toLowerCase())
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json({message:"No user by that username"})
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error finding user'
            });
        })
});

router.get('/:id/list',(req,res)=>{
    userDb.getUserList(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error getting list for user:${req.params.id}`
            });
        })
});

router.get('/list/:gift_id', VerifyGift, (req,res)=>{
    res.status(200).json(req.gift)
});

router.post('/:id/list', AuthorizeAction, (req,res)=>{
    userDb.addGift(req.body)
        .then(data=>{
            console.log("insert success",data)
            if(data){
                res.status(201).json({message:"Gift created sucessfully!"});
            }
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error,
                errorMessage: 'error creating gift'
            });
        })
});

router.put('/:id/list/:gift_id',AuthorizeAction,  VerifyGift, (req,res)=>{
    userDb.updateGift(req.body, req.params.gift_id)
        .then(data=>{
            if(data > 0){
                res.status(200).json({message:'Gift updated'})
            }else{
                res.status(404).json({message:`No gift found with id: ${req.params.gift_id}`})
            }
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error updating gift with id:${req.params.gift_id}`
            });
        })
});

router.put('/:id/list/:gift_id/purchased',VerifyGift, (req,res)=>{
    userDb.markPurchased(req.params.gift_id)
        .then(data=>{
            if(data > 0){
                res.status(200).json({message:'Gift updated'})
            }else{
                res.status(404).json({message:`No gift found with id: ${req.params.gift_id}`})
            }
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error updating gift with id:${req.params.gift_id}`
            });
        })
});

router.delete('/:id/list/:gift_id',AuthorizeAction, VerifyGift, (req,res)=>{
    userDb.deleteGift(req.params.gift_id)
        .then(data=>{
            if(data > 0){
                res.status(200).json({message:'Gift deleted'})
            }else{
                res.status(404).json({message:`No gift found with id: ${req.params.gift_id}`})
            }
        })
        .catch(error=>{
            res.status(500).json({
                error:error,
                message:`error deleting gift with id:${req.params.gift_id}`
            });
        })
});




module.exports = router;