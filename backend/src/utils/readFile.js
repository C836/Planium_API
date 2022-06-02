import fs from "fs";

export function readFile(plans, prices, callback) {
  let response = [];
  fs.readFile(plans, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    response.push(JSON.parse(data));

    fs.readFile(prices, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      response.push(JSON.parse(data));
      callback(response);
    });
  });
}
