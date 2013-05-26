var fs = require('fs'),
    strata = require('strata');

var page;

strata.use(strata.commonLogger);

strata.get('/', function(env, callback) {
  if (!page) {
    page = fs.readFileSync('index.html', 'utf8');
  }
  callback(200, {}, page);
});

strata.run({port: process.env.VCAP_APP_PORT || 8080});
