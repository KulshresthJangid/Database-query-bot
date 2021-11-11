require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')

const db = require('./db/connection')
const Data = require('./models/models')
const botRouter = require('./routes/routes')
const app = require("express")();

app.use(botRouter)

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
})


io.on("connection", (socket) => {
    console.log("Information:", socket);
    console.log("Socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("PAYLOAD:", payload);
        io.emit("chat", payload)
    })
})

app.use(bodyParser.json())

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})


