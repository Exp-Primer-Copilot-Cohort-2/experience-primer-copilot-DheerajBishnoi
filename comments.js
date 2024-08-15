//create web server
var express = require('express');
var app = express();

//create a router
var router = express.Router();

//create a route
router.get('/comments', function(req, res) {
  res.send('Comments');
});

//mount the router on the app
app.use('/', router);

//start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});