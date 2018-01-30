var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_PURPLE_URI);
//process.env.MONGODB_URI
// mongoose.connect(process.env.MONGOLAB_PURPLE_URI);

module.exports = {mongoose};

// process.env.NODE_ENV === 'test'
// process.env.NODE_ENV === 'development'
// process.env.NODE_ENV === 'production'