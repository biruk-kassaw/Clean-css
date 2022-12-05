const {removeUnusedCss} = require("./index.js")
const express = require("express");
const app = express()

app.use(express.json())
app.get("/", (req,res)=>{
    res.status(200).send("hello")
})
app.get("/api/v1/remove-unused-css", removeUnusedCss)

const port = 4000;
app.listen(port,()=>{
    console.log(`listening at port ${ port }`)
})