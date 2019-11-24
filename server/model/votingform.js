const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    Voterid: {
        type: String
    },
    Votersname: {
        type: String
    },
   
},
);
module.exports = mongoose.model('VUser', user); 