// YOUR CODE HERE
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const storeRouter = require("./routes/store")
const { NotFoundError } = require("./utils/errors")

const app= express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors());
app.use("/", storeRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
    next()
})

app.get("/", async (req, res, next) => {
    res.status(200).json({"ping" : "pong"})
})

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    const status= error.status || 400
    const message = error.message
    return res.status(status).json({
        error: {message, status}
    })
})

module.exports = app;
