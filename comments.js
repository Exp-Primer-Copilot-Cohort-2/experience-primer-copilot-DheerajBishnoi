//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a router
const comments = require('./comments.js');
app.use('/comments', comments);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});