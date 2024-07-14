const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("sendMessage", ({ userId, pickerId, message }) => {
    io.to(pickerId).emit("receiveMessage", { userId, message });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
