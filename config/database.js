const mogoose = require('mongoose')
require('dotenv').config();

const DB_CON_STRING = process.env.DB_CON_STRING;

module.exports = () => {
    mogoose.connect(DB_CON_STRING)
        .then(() => console.log('DB Connection Successful!!'))
        .catch(err => console.log(err.message))
}