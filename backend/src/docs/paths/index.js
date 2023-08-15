const categories = require('./categories');
const login = require('./login');
module.exports = {
   
    "paths":{
        ...login,
        ... categories

    }
}