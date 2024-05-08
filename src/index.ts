import express from "express";
import usersRouter from "./routes/users"
import bodyParser from "body-parser"

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/users", usersRouter);
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});