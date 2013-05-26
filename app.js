var fs = require('fs'),
    path = require('path'),
    strata = require('strata');

var page,
    root = path.resolve('./public');

strata.use(strata.commonLogger);
strata.use(strata.file, root);

strata.get('/', function(env, callback) {
  if (!page) {
    page = fs.readFileSync('index.html', 'utf8');
  }
  callback(200, {}, page);
});

strata.run({port: process.env.VCAP_APP_PORT || 8080});
