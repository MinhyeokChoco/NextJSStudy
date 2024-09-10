const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    setTimeout(() => {
        res.send("중바오 고생해 ,,");
    }, 2000);
})

app.listen(4000, () => {
    console.log("server on ~");
})