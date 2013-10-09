var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static('../demos/phonejs/KitchenSink'))
  .use(connect.cookieParser())
  .use(connect.session({ secret: 'my secret here' }));

http.createServer(app).listen(8001);
