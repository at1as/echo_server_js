var express     = require('express');
var bodyParser  = require('body-parser');

app = express();
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());


/* General functions & helpers */
function timestamp(){
  return new Date().toISOString() + " "
};


/* Echo Request headers as response body */
app.get('/headers', function(req, res){
  console.log(timestamp() + 'Responding with request headers');
  res.set('Connection', 'close');
  res.send(req.headers);
});

/* Echo API code specified in URL as a response with status code from server */
app.get('/statuscode/:code', function(req, res) {
  console.log(timestamp() + 'Responding with HTTP status code ' + req.params.code);
  res.set('Connection', 'close');
  res.status(req.params.code).end();
});

/* Echo message in URL */
app.get('/echo/:message', function(req, res) {
  console.log(timestamp() + 'Responding with body ' + req.params.message);
  res.set('Connection', 'close');
  res.send(req.params.message);
});

/* Echo Request body as response body */
app.post('/echo', function(req, res) {
  console.log(timestamp() + 'Responding with request body as json');
  res.set('Connection', 'close');
  res.json(req.body);
});


/* Wait for incoming requests */
app.listen(app.get('port'), function() {
  console.log('\nApplication Started on http://127.0.0.1:' + app.get('port') +'\n');
});

