const express = require("express");
const connectDB = require("./config/db");
const bookRoute = require("../server/routes/api/books");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/book", bookRoute);
const PORT = process.env.PORT || 8088;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
