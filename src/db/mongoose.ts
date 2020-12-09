import mongoose from 'mongoose';

mongoose.Promise = global.Promise; // -----?-----
let mongoUri = process.env.MONGO_URI!;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`Successfully connected to atlas mongodb`);
    }
});

export { mongoose as default };
// module.exports = { mongoose };