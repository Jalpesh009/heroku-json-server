// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const path = require("path");
const cors = require("cors");
const router = jsonServer.router(path.join(__dirname, "db.json"));

server.use(middlewares);
server.use(cors());
server.get("/test", (req, res) => {
  res.status(200).send({
    text: "Hello!"
  });
});
server.use("/api/v1", router);
const port = process.env.PORT || 3004;
server.listen(port, () => {
  console.log("JSON Server is running", port);
});
