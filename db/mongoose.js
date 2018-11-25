const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('Database is connected!');
}).on('error', function(error){
    console.log('Connection Err: ', error);
});

module.exports = {mongoose};
