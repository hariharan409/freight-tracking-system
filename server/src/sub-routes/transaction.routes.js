const express = require("express");
const app = express.Router();
const transactionController = require("@/controllers/transaction.controller");

app.post("/get-new-transaction-list",transactionController.getNewTransactionList);

module.exports = app;