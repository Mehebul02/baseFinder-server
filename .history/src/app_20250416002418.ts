import cors from "cors";
const express = require('express')
const app = express()
import cookieParser from "cookie-parser";
import router from "./app/routes";
import { Request, Response } from "express";
// Middleware setup
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !');
});


export default app
