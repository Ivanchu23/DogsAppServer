const mongoose = require('mongoose');

async function connect(){
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.7unqzra.mongodb.net/flutter-database', {
        useNewUrlParser: true
    });
    
    console.log('>>> DB is connected');
};

module.exports = { connect };