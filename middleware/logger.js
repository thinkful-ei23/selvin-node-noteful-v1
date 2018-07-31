'use strict';

// Listen for incoming connections
const logStuff = function(req, res, next) {
    const now = new Date();
    console.log(`${now.toLocaleString()} ${req.method} ${req.url}`);
    next(); // pass control to next middleware
} 
module.exports = logStuff;
