const transactionService = require("@/services/transaction.service");

exports.getNewTransactionList = async (_, res) => {
    try {
        const result = await transactionService.getNewTransactionList();
        sendResponse(res, 200, true, "get new transaction api", result);
    } catch (error) {
        sendResponse(res, 500, false, error.message || error, null);
    }
};