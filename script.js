import express from "express";
import router from "./routes.js"
import bodyParser from "body-parser";

const app = express();

const port = 3015;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}, have a nice day`);
});

app.use(bodyParser.json());

app.use("/api/characters", router)

