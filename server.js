// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

server.use(middlewares);
server.use('/api/v1', router)
server.listen(3004, () => {
  console.log("JSON Server is running");
});
