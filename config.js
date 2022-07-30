const mongoose = require('mongoose');

mongoose.connect('', {
    useNewUrlParser: true
})
.then(() => console.log('Connecté à la base de donnée'))
.catch((err) => console.log(err));
