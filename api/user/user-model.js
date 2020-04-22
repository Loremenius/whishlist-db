const db = require('../../data/dbConfig');

module.exports = {
    findByName,
    createUser,
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