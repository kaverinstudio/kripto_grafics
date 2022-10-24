const express = require("express");
const router = require('./routes/router')
const cors = require("cors");
const config = require('config')


const PORT = process.env.PORT || config.get('serverPort')

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server starter on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
