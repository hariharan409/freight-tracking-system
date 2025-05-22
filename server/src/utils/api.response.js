

exports.sendResponse = (response,statusCode,success,message,data) => {
    return response.status(statusCode).json(
        {
            success,
            message,
            data
        }
    );
}