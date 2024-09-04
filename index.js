const express = require("express");
const path = require('path')
const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    const filePath = path.join(__dirname, 'public/index.html');
    res.sendFile(filePath);

})

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        answer: a + b
    })

})


app.listen(3000);