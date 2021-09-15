const Store = require('../../../store/mysql');
const bcrypt = require('bicrypt');

const TABLE = 'auth';

function list() {
    return Store.list(TABLE);
}

function get(userId) {
    return Store.get(TABLE, userId);
}

function insert(user, body) {
    let authData = {
        id: user.id,
        password: bcrypt.hash(body.password, 5),
    }
    return Store.insert(TABLE, authData);
}

function update(body) {
    if(body && body.id && body.password) {
        let newAuthData = {
            id: body.id,
            password: bcrypt.hash(body.password, 5),
        }
        return Store.update(TABLE, newAuthData)
    } else {
        throw new Error('Invalid body format')
    }
}



module.exports = {
    list,
    get,
    insert,
    update,
}