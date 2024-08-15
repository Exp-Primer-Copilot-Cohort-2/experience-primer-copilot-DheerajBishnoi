// create web server
const express = require('express');
const app = express();
// use body parser to parse json data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// create array to store comments
const comments = [];
// get request to get comments
app.get('/comments', (req, res) => {
    res.send(comments);
});
// post request to add a comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send('Comment added');
});
// start server
app.listen(3000, () => {
    console.log('Server started');
});