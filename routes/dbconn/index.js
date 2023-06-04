require('dotenv').config()
const mongoose = require('mongoose');
const  dbconnect = async () => {
    try {
    const data =await mongoose.connect('mongodb://root:root@mongo?authSource=admin');
    console.log("connected");
    }
    catch(e) {
        console.log(e);
    }
}
dbconnect();