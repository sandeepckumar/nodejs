if (process.env.MODE === "dev") {
  module.exports = {
    mongoDB: process.env.MONGO_DEV,
  };
} else {
  module.exports = {
    mongoDB: process.env.MONGO_PROD,
  };
}
