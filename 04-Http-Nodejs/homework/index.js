const http = require("http");
const morgan = require("morgan");
const Listen_Port = 3000;
var finalhandler = require("finalhandler");

const logger = morgan("dev");

const server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  logger(req, res, function (err) {
    if (err) return done(err)

    // respond to request
    res.setHeader('content-type', 'text/plain')
    res.end('hello, world!')
  })
})


server.listen(Listen_Port, () => {
  console.log(`Server listens on port ${Listen_Port}`);
});
