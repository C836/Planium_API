import express from "express";
import fs from "fs";

const router_post = express.Router();
const filePath = "./src/data/beneficiarios.json";

router_post.post("/", (req, res) => {
  const body = req.body;

  fs.readFile(filePath, "utf8", function (error, data) {
    if (error) {
      res.send(error);
    } else {
      const file = JSON.parse(data);
      file.beneficiarios.push(body);

      const json = JSON.stringify(file);
      fs.writeFile(filePath, json, "utf8", (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Atualizado")
        }
      });
    }
  });
});

export default router_post;
