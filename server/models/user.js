var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minglength: 1,
        trime: true
    }
});

module.exports = {User};