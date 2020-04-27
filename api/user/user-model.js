const db = require('../../data/dbConfig');

module.exports = {
    findByName,
    createUser,
    editUser,
    getUserList,
    getGift,
    addGift,
    updateGift,
    deleteGift,
    markPurchased
};

function findByName(username){
    return db('user')
        .select('*')
        .where('username', username)
        .first()
}

function createUser(user){
    return db('user').insert({...user}, "*");
}

function editUser(user){
    return db('user').update({...user}).where('id', user.id)
}

function getUserList(user_id){
    return db('gift').select('*').where('user_id', user_id)
}

function getGift(gift_id){
    return db('gift').select('*').where('id', gift_id).first()
}

function addGift(gift){
    return db('gift').insert({...gift}, "*")
}

function updateGift(gift, gift_id){
    return db('gift').update({...gift}).where('id', gift_id)
}

function deleteGift(gift_id){
    return db('gift').where('id', gift_id).del()
}

function markPurchased(gift_id){
    return db('gift').update({purchased:true}).where('id', gift_id)
}