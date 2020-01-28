const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const carmodelsRouter = require("./routes/carmodels");
const employeesRouter = require("./routes/employees");
const salesRouter = require("./routes/sales");

app.use("/carmodels", carmodelsRouter);
app.use("/employees", employeesRouter);
app.use("/total_sales", salesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
