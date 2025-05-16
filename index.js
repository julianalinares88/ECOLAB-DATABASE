require("dotenv").config();

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);

const express = require("express");
const path = require("path");
const { createServer } = require("http");

const productsRouter = require("./server/routes/products.router");
const screen1EventsRouter = require("./server/routes/screen1Events.router");
const usersRouter = require("./server/routes/user.router");
const ordersRouter = require("./server/routes/orders.router");
const postsRouter = require("./server/routes/posts.router");
const { initSocketInstance } = require("./server/services/socket.service");

const PORT = 5050;

const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
app.use("/app1", express.static(path.join(__dirname, "app1")));
app.use("/app2", express.static(path.join(__dirname, "app2")));

// Rutas API
app.use("/api/products", productsRouter);
app.use("/api/events", screen1EventsRouter); 
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/posts", postsRouter);

// Sockets
initSocketInstance(httpServer);

// Server
httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
