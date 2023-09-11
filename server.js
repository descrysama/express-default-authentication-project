const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fs = require('fs');
app.use(cookieParser())

app.post('/save', (req, res) => {
    // Check if the request contains a body
    if (req.body) {
        // Save the req.body data to a file named "test.txt" in the root folder
        fs.writeFileSync('test.txt', JSON.stringify(req.body));

        console.log('Data saved successfully.');
        return res.status(200).send('Data saved successfully.');
    } else {
        return res.status(400).send('Bad Request');
    }
});


app.listen(port, () => console.log('Serveur ouvert sur le port : ' + port))