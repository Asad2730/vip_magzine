const express = require("express")

const app = express()
const port = process.env.PORT || 6932

app.use("/assets", express.static(__dirname + "/styles/app.css"))


app.get("/home", (_, res) => {
  res.sendFile(__dirname + "/home.html")
})

app.get("/profile", (_, res) => {
  res.sendFile(__dirname + "/profile.html")
})

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