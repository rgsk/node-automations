import cors from "cors";
import { config } from "dotenv";
import express from "express";
import errorHandler from "middlewares/errorHandler";
import rootRouter from "routers/rootRouter";
config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", rootRouter);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
