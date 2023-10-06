const dotenv = require("dotenv").config();
const connectDB = require("./db/config.js");
const app = require(".");

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
