var nodePop = require('node-pop');
var config = require('./config.js');
var job = require('./job.js');
var log = require('./log.js');

job.init({
  nodePop: nodePop
});

nodePop.init({

  config: config,
  job: job,
  log: log

}, function (err) {

  if (err) {
    log(err);
  } else {
    nodePop.wake();  
  }

});
