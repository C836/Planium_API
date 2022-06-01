import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);

import router_get from "./routes/get.js";
import router_post from "./routes/post.js";
import router_proposta from "./routes/proposta.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});

app.use("/get", router_get);
app.use("/post", router_post);
app.use("/proposta", router_proposta);
