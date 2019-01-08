const mongoose = require('mongoose');

var env = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(env.MONGODB_URI || env.MONGO_PRO, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

if (env.PORT == 3000) {
    mongoose.connection.once('open', function(){
        console.log('Database is connected!');
    }).on('error', function(error){
        console.log('Connection Err: ', error);
    }); 
}


module.exports = {mongoose};
