const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://ikehunter5:Password1234@ds151382.mlab.com:51382/vbhs', { useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('Database is connected!');
}).on('error', function(error){
    console.log('Connection Err: ', error);
});

module.exports = {mongoose};
