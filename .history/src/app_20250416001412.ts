import cors from "cors";
const express = require('express')
const app = express()

// Middleware setup
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
