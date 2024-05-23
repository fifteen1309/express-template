import express from "express";
import { PORT } from "./config/constant.js";
import { connection } from "./database/dbConnect.js";
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.listen(PORT, async () => {
  await connection();
  console.log(`Server is listen at port: ${PORT}`);
});
