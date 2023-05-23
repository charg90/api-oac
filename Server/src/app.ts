import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import baseRouter from "./Routes";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", baseRouter);

export default app;
