const db = require('../../data/dbConfig');

module.exports = {
    findByName,
    editUser,
    getUsersAll,
    removeUser,
    getGiftsAll
};

function findByName(username){
    return db('user')
        .select('*')
        .where('username', username)
        .first()
}

function editUser(user){
    return db('user').update({...user}).where('id', user.id)
}

function removeUser(username){
    return db('user').where('username', username).delete()
}

function getUsersAll(){
    return db('user').select('*')
}

function getGiftsAll(){
    return db('gift').select('*')
}