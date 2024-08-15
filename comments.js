//create web server
//use express
var express = require('express');
var app = express();

//use body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//use mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comment');

//create schema
var commentSchema = new mongoose.Schema({
  name: String,
  comment: String
});

var Comment = mongoose.model('Comment', commentSchema);

//create route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/comments', function(req, res){
  Comment.find(function(err, comments){
    if(err){
      console.log(err);
    }else{
      res.json(comments);
    }
  });
});

app.post('/api/comments', function(req, res){
  Comment.create(req.body, function(err, comments){
    if(err){
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }else{
      res.status(200).json({});
    }
  });
});

app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
