module.exports = (req, res, next) => {
    console.log('Authorizing user to edit list.');

    if (req.token.id === req.params.id){
        print('user is authorized to edit list')
        next()
    }else{
        print('user is not allowed to edit list')
        res.status('500').json({message:`user is not allowed to edit list of user:${req.params.id}`})
    }
}