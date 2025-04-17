
const express = require('express')
const app = express()
// import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import { Request, Response } from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
// Middleware setup
// app.use(cors({ origin: "http://localhost:5000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get('/', (req: Request, res: Response) => {
  res.send(' !');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app
