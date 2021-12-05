const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ss:Kushumapu1234@cluster0.iksxy.mongodb.net/gbc_users?retryWrites=true&w=majority"


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to your database ");
  })
  .catch((err) => {
    console.log("Could not connect to your database.", err);
    process.exit();
  });

const employees = require("./routes/Router");

app.use("/", employees);

app.listen(9090, () => {
  console.log(`Server port: 9090`);
});
