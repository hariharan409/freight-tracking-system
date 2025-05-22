const express = require("express");
const app = express.Router();
const transactionRouter = require("@/sub-routes/transaction.routes");



app.get("/", (_, res) => res.send({ response: "freight tracking system api is ready to serve" }).status(200));

app.use("/transaction",transactionRouter);



module.exports = app;
