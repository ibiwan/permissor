const express    = require('express');
const bodyParser = require('body-parser')
const path       = require('path');
// require('./data/access');
const initTestData = require('./data/init_test_data').initTestData;

const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
  return res.send('pongyu');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/init-test-data', function (req, res) {
  const result = initTestData();
  res.send({ result });
});

app.listen(process.env.PORT || 8080);