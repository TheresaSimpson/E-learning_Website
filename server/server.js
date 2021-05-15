require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./config/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", require("./routers/authRoute"));
app.use("/user", require("./routers/userRoute"));

app.listen(4000, () => console.log("Server up and running"));
