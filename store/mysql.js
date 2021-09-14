const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user1234',
    database: 'social-backend'
})

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
     
      console.log('connected as id ' + connection.threadId);
});

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, results) => {
            if (err) {
                reject(err);
                return false;
            }

            resolve(results);
        })
    })   
}

function get(table, id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id= ?`, id, (err, result) => {
            if (err) {
                reject(err);
                return false;
            }
            resolve(result[0]);
        })
    })
}

function insert(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`,data, (err, result) => {
            if (err) {
                reject(err);
                return false;
            }

            resolve(result);
        })
    })
}

function update(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id= ?`,[data, data.id], (err, result) => {
            if (err) {
                reject(err);
                return false;
            }

            resolve(result);
        })
    })
}

module.exports = {
    list,
    get,
    insert,
    update
}