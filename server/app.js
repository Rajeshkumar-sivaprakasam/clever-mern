const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const bookRoute = require("../server/routes/api/books");

const app = express();

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json({ limit: "30mb", extends: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extends: "true" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/books", bookRoute);
const PORT = process.env.PORT || 8088;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
