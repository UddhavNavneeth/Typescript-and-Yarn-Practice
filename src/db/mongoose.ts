import mongoose from 'mongoose';

mongoose.Promise = global.Promise; // -----?-----
let mongoUri = 'mongodb+srv://UddhavNavneeth:Uddhavthegr8@cluster0.qoq5v.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`Successfully connected to atlas mongodb`);
    }
});

export { mongoose as default };
// module.exports = { mongoose };