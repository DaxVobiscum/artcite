var _ = require("underscore");

var path = require("path");
var sprintf = require("sprintf");

var express = require("express");
var redis = require("redis");
var session = require("express-session");

var config = require("./config");

var RedisStore = require("connect-redis")(session);

var app = express();
var redisClient = redis.createClient();

var storeOptions = _.extend(config[ "redis-options" ], {
    client: redisClient
});

app.use(session({
    resave: false,
    saveUninitialized: false,
    store: new RedisStore(storeOptions),
    secret: config[ "redis-secret" ]
}));

app.use(express.static(path.resolve(__dirname, "client")));

app.get("/", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

var server = app.listen(process.env.PORT, process.env.IP, 0, () => {
    
    console.log(sprintf("Server running: http://%s:%s", process.env.IP, process.env.PORT));
});