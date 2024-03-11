const http = require("http");
const url = require("url")

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Parse the request url
  const parsed = url.parse(req.url, true);
  // Get the path from the parsed URL
  const reqUrl = parsed.pathname;

  if (req.method === "POST") {
    if (reqUrl === "/") {
      res.write("Hola al home");
      res.end();
    }
    if (reqUrl === "/login") {
      res.write("Hola al login");
      res.end();
    }
    if (reqUrl === "/register") {
      res.write("Hola al register");
      res.end();
    }else {
      // Si la solicitud no es para la ruta raíz, responder con un código de estado 404 (Not Found)
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Not Found\n");
    }
  }else if (req.method === "GET") {
    if (reqUrl === "/") {
      res.write("Hola al home");
      res.end();
    }
    if (reqUrl === "/login") {
      res.write("Hola al login");
      res.end();
    }
    if (reqUrl === "/register") {
      res.write("Hola al register");
      res.end();
    }else {
      // Si la solicitud no es para la ruta raíz, responder con un código de estado 404 (Not Found)
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Not Found\n");
    }
  } else {
    // Si la solicitud no es para la ruta raíz, responder con un código de estado 404 (Not Found)
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Not Found\n");
  }
});
/* Conexion a bd */

server.listen(3000, () => {
  console.log("Server ");
});
