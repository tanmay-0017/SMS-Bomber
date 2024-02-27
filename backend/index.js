const express = require('express');
const morgan = require('morgan');
const spamRouter = require("./Router");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(morgan("common"));
app.use(express.json({ limit: "10mb" }));
app.use("/send" , spamRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});