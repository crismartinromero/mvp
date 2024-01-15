export const mongoose = require('mongoose');

const mongoURI =
  "mongodb+srv://cristianmrom:vP5184oWBkjrouHw@cluster0.krh6svt.mongodb.net/mvp-main?retryWrites=true&w=majority";


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
