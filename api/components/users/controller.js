const Store = require('../../../store/mysql');
const {nanoid} = require('nanoid');

const TABLE = 'user';

function list() {
    return Store.list(TABLE);
}

function get(id) {
    return Store.get(TABLE, id);
}

function upsert(body) {
    if (body && body.id){
        let user = {
            id: body.id,
            username: body.username,
            bio: body.bio
        }
        return Store.update(TABLE, user)
    } else if (body) {
        let user = {
            id: nanoid(10),
            username: body.username,
            bio: body.bio,
        }
        return Store.insert(TABLE, user)
    } else {
        throw new Error('There is no body!')
    }
}

function remove(userId) {
    return Store.remove(TABLE, userId);
}


module.exports = {
    list,
    get,
    upsert,
    remove,
}