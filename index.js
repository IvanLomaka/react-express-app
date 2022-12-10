const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

const reactBuild = path.join(__dirname, "front", "build")
app.use(express.static(reactBuild))

app.get("/api", async(req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(PORT, () => console.log('server running at ' + PORT))