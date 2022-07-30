const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rootuser:rootuser@cluster0.kblyp.mongodb.net/airbnb', {
    useNewUrlParser: true
})
.then(() => console.log('Connecté à la base de donnée'))
.catch((err) => console.log(err));