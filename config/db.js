const mongoose = require('mongoose');
require('dotenv').config();

//MongoDV Connection
const uri = process.env.ATLAS_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("MongoDB Connected");
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}

module.exports = connectDB;