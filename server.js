const express = require("express")

const app = express()
const port = process.env.PORT || 6932

// app.use("/assets", express.static(__dirname + "/assets"))

app.get("/signup", (_, res) => {
  res.sendFile(__dirname + "/signup.html")
})
app.get("/forgetPassword", (_, res) => {
  res.sendFile(__dirname + "/forgetPassword.html")
})
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/login.html")
})

app.listen(port, () => console.info(`App listening on port ${port}`))