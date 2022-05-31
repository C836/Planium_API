import express from "express";
import fs from "fs";

const router_proposta = express.Router();

const paths = [
  "./data/plans.json",
  "./data/prices.json",
  "./data/beneficiarios.json",
];

const proposta = "./data/proposta.json";

router_proposta.get("/", (req, res) => {
  let result = [];

  paths.map((filePath) => {
    result.push(JSON.parse(fs.readFileSync(filePath, "utf8")));
  });

  fs.writeFile(proposta, JSON.stringify(result), "utf8", (error, data) => {
    res.send(result)
  });
});

export default router_proposta;
