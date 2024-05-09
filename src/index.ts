import express from "express";
import router from "./routes/app";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

app.use(cors(corsOptions));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});