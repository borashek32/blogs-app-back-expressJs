import express from "express";
import router from "./routes/app";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});