var uuidv4 = require("uuid/v4");

module.exports = {
    "redis-secret": uuidv4(),
    "redis-options": {
        host: "127.0.0.1",
        port: 6379
    }
};