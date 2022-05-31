import express from "express";
import fs from "fs";

const router_post = express.Router();
const filePath = "./data/beneficiarios.json";

router_post.post("/", (req, res) => {
  const body = req.body;

  fs.readFile(filePath, "utf8", function (error, data) {
    if (error) {
      res.send(error);
    } else {
      const file = JSON.parse(data);
      file.beneficiarios.push(body);

      const json = JSON.stringify(file);
      fs.writeFile(filePath, json, "utf8", function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send("tudo certo")
        }
      });
    }
  });
});

export default router_post;
