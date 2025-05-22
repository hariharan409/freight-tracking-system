const { sendResponse } = require("@/utils/api.response");
const jwt = require("jsonwebtoken");

// middleware to verify jwt and extract user info (including roles)
const authenticateToken = async(request,response,next) => {
    try {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token) {
            return sendResponse(response,401,false,"Unauthorized: No token provided",null);
        }
        const user = jwt.verify(token,process.env.JWT_SECRET);
        request.user = user; // add the user details to the request
        next();
    } catch (error) {
        sendResponse(response,500,false,(error.message || error),null)
    }
}

module.exports = {authenticateToken};