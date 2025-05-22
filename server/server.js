require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // load env first
require('module-alias/register');
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.APP_PORT;
const mainRouter = require("@/routes/main.router");

// Set CORS options
const CORS_OPTIONS = {
    origin: ['http://localhost:5173'], // frontend and the backend hosted on different domain, so maually handling the cors
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

// enable cors for all routes
app.use(cors(CORS_OPTIONS));

// middleware to handle post & put request. payload size - 50mb
app.use(express.json({limit: "50mb"})); 
// api-routes
app.use("/fts/web-service",mainRouter);

app.listen(PORT,() => {
    console.log(`freight tracking system server running on port ${PORT}`);
});