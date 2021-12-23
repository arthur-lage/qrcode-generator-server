const express = require('express')
const QRcode = require("qrcode")
const cors =  require("cors")

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post("/api/gen", async (req, res) => {
    const url = req.body.url

    try {
        return res.send(await QRcode.toDataURL(url))
    } catch (e) {
        res.sendStatus(400).send("Invalid qr code")
    }
})


app.listen(PORT, () => console.log("Running on port " + PORT))