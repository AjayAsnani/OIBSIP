const mongoose = require("mongoose");

const mongoURI =
  "mongodb://ajaysnani555:Ajaycool@ac-p2lug05-shard-00-00.wqfeqnj.mongodb.net:27017,ac-p2lug05-shard-00-01.wqfeqnj.mongodb.net:27017,ac-p2lug05-shard-00-02.wqfeqnj.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-10faee-shard-0&authSource=admin&retryWrites=true&w=majority ";

const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err, result) => {
      if (err) console.log(err);
      else {
        console.log("connected");
      }
    }
  );
};
module.exports = mongoDB;
