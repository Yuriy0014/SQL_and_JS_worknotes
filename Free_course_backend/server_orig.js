const http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');
let counter = 0

// Location of your favicon in the filesystem.
var FAVICON = path.join(__dirname, 'public', 'favicon.ico');

const server = http.createServer((req, res) => {
  var pathname = url.parse(req.url).pathname;
  counter++;
  switch (pathname) {
    //
    case ('/favicon.ico'):
      counter--;
      // MIME type of your favicon.
      // .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
      //
      // .jpg = 'image/jpeg'
      // .png = 'image/png'
      // .jpeg = 'image/jpeg'
      res.setHeader('Content-Type', 'image/x-icon');
      // Serve your favicon and finish response.
      //
      // You don't need to call `.end()` yourself because
      // `pipe` will do it automatically.
      fs.createReadStream(FAVICON).pipe(res);
      return;
    case ('/students'):
      res.write('STUDENTS');
      break;
    case ('/courses'):
      res.write('FRONT + BACK');
      break;
    default:
      res.write('404 not found :(');
      break;
  }
  res.write(" " + counter)
  res.end();
});

//Port for listening on localhost
server.listen(3007)

/* Sources
https://youtu.be/jwg3qwyMhK8
https://stackoverflow.com/questions/39552736/set-favicon-in-http-server
https://nodejs.org/api/fs.html#file-system
*/