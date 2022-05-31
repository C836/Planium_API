import fs from "fs";
import { beneficiario } from "./../models/beneficiario.js";
import { getPrice } from "../utils/getPrice.js";

const filePath = "./data/beneficiarios.json";

export function beneficiarios_controller(plans, prices) {
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf8", (error, data) => {
      if (error) return error;

      const file = JSON.parse(data),
      beneficiarios = file.beneficiarios;

      let result = [];

      beneficiarios.map((item, index) => {
        const plano = item.plano;
        const registros = item.beneficiario;
        const precos = getPrice(plano, plans, prices);

        result.push(new beneficiario(plano, registros, precos));
      });

      resolve(result);
    });
  });
}
