const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors =require('cors')

const app = express();
const isDev = app.settings.env === 'development'
const URL = isDev ? 'http://localhost:3000' : 'https://sketchbook-frontend-1-l3e2soqfg-abhi-chaudharys-projects.vercel.app/'
app.use(cors({origin:URL}))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: URL});

io.on("connection", (socket) => {
  console.log("server connected")

  socket.on('beginPath', (arg) => {
    socket.broadcast.emit('beginPath', arg)
  })

  socket.on('drawLine', (arg) => {
    socket.broadcast.emit('drawLine', arg)
  })

  socket.on('changeConfig', (arg) => {
    socket.broadcast.emit('changeConfig', arg)
  })

  socket.on('krde', (arg) => {
    socket.broadcast.emit('krde', arg)
  })

  socket.on('krde2', (arg) => {
    socket.broadcast.emit('krde2', arg)
  })

  socket.on('dataentry', (arg) => {
    socket.broadcast.emit('dataentry', arg)
  })

});



httpServer.listen(5000);