const express = require("express");
const router = express.Router();
const WebSocket = require("ws");

let wss;

function createWebSocketServer(server) {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("New WebSocket connection");
    ws.on("message", (message) => {
      console.log(`Received message: ${message}`);
      ws.send("Hello from WebSocket server");
    });
  });
}

router.get("/", (req, res) => {
  res.send("Hello from Backend");
});

module.exports = {
  router,
  createWebSocketServer,
};
