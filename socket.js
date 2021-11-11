const app = require("express")(3000);

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

//MONGO_URI =mongodb+srv://chatbot:chatbot@cluster0.0mqiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
