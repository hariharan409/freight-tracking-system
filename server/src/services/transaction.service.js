const transactionRepository = require("@/repositories/transaction.repository");

exports.getNewTransactionList = async() => {
    try {
        return await transactionRepository.getNewTransactionList();
    } catch (error) {
        throw new Error(error.message || error);
    }
}