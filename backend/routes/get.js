import express from "express";
import { beneficiarios_controller } from "./../controllers/beneficiarios_controller.js";
import { readFile } from "../utils/readFile.js";

const router_get = express.Router();

const plans = "./data/plans.json";
const prices = "./data/prices.json";

router_get.get("/", (req, res) => {
  readFile(plans, prices, (callback) => {
    beneficiarios_controller(callback[0], callback[1])
    .then(response => res.send(response));
  });
});

export default router_get;
