const fs = require("fs");

//
fs.readFile("~/desktop/libai.txt", "utf8", function (err, dataStr) {
  console.log("err,", err);
  console.log("dataStr: ", dataStr);
});
