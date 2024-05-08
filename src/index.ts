import express from "express";
import router from "./routes/app"
import bodyParser from "body-parser"

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api", router);
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});