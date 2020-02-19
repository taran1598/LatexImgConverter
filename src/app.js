const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Latex Converter');
// });


// serve files from the frontend directory
app.use(express.static('frontend'));

const port = process.env.PORT || 3000; // configure dynamic port DO NOT CHANGE
app.listen(port, () => console.log(`Listening to port ${port}...`));


// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
