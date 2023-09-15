const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fs = require('fs');
app.use(cookieParser())

app.get('/api', (req, res) => {
    res.json({ message: "Hello from backend!" })
});


app.listen(port, () => console.log('Serveur ouvert sur le port : ' + port))