import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import client from "./src/redisClient.js";
import { handelSocketConnection } from "./src/socketRoutes.js";
import { requestOtp, verifyOtp } from "./src/verification/otpController.js";

dotenv.config({ path: "env" });
dotenv.config({ override: true });

const app = express();
const httpServer = createServer(app);

const allowedOrigins = [
  ...(process.env.PUBLIC_WEBSOCKET_URL
    ? process.env.PUBLIC_WEBSOCKET_URL.split(",").map((origin) => origin.trim())
    : []),
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

const localNetworkOriginRegex =
  /^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?\/?$/;

function isAllowedOrigin(origin) {
  if (!origin) return true;

  const originWithoutSlash = origin.replace(/\/$/, "");
  const isAllowed = allowedOrigins
    .map((item) => item.replace(/\/$/, ""))
    .includes(originWithoutSlash);

  return isAllowed || localNetworkOriginRegex.test(originWithoutSlash);
}

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`Origin not allowed: ${origin}`));
    },
  }),
);

app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/verification/request-otp", requestOtp);
app.post("/api/verification/verify-otp", verifyOtp);

const io = new Server(httpServer, {
  cors: {
    origin: (origin, callback) => {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`Origin not allowed: ${origin}`));
    },
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    console.log("socket auth rejected: missing username");
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

client
  .connect()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error connecting db", err));

io.on("connection", (socket) => {
  console.log(`user joined: ${socket.username} (${socket.id})`);
  handelSocketConnection(io, socket);

  socket.on("disconnect", (reason) => {
    console.log(
      `user disconnected: ${socket.username} (${socket.id}) reason=${reason}`,
    );
  });
});

httpServer.listen(process.env.PORT || 5000, "0.0.0.0", () =>
  console.log("port running at", process.env.PORT || 5000),
);
