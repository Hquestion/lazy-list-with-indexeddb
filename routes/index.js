var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let start = 0;
let limit = 10000;
router.get('/data', function(req, res, next) {
  function makeRandom() {
    return `name--${Math.ceil(Math.random() * 100000000)}`;
  }
  let list = [];
  for(;start < limit; start++) {
    list.push({
      name: makeRandom(),
      x: start,
      y: start,
      w: start,
      h: start,
      id: start
    });
  }
  limit += 10000;

  res.send(JSON.stringify(list));
});

module.exports = router;
