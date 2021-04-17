import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import connect from "../db";
import postRouter from "./routers/postRouter";

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(helmet());
connect();

app.use("/", postRouter);

app.listen(PORT, () => {
  console.log(` 🐳 ${PORT} Server Start With MONGODB`);
});
