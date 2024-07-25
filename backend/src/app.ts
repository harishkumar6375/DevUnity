import express from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();

const corsOptions: CorsOptions = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT"],
};
export const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Server is working...");
});