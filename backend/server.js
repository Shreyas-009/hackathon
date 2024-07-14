const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const http = require("http");
const socketIo = require("socket.io");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const pickerRoutes = require("./routes/pickerRoutes");
const userRoutes = require("./routes/userRoutes");
const { encrypt, decrypt } = require("./utils/encryption");
const cors = require("cors");


dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

connectDB();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/pickers", pickerRoutes);
app.use("/api/users", userRoutes);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("sendMessage", ({ userId, pickerId, message }) => {
    io.to(pickerId).emit("receiveMessage", { userId, message });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
