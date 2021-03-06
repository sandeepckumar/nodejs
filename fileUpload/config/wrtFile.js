const fs = require("fs");

const wrtFile = (fileName, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      res(true);
    });
  });
};

module.exports = wrtFile;
