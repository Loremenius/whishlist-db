module.exports = (req, res, next) => {
    console.log('Authorizing user to edit list.');
    console.log(req.token.id);
    console.log(req.params.id);

    if (req.token.id === parseInt(req.params.id)){
        console.log('user is authorized to edit list')
        next()
    }else{
        console.log('user is not allowed to edit list')
        res.status('500').json({message:`user is not allowed to edit list of user:${req.params.id}`})
    }
}