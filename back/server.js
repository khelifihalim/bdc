const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    process.env.MONGODB_CONNECT
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error: " + error.message));

const appointments = require("./routes/appointments");
const contacts = require("./routes/contact");
const auth = require("./routes/auth");


app.use("/api/auth", auth);
app.use("/api/appointments", appointments);
app.use("/api/contact", contacts);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
