const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastePavan:PavanMongoStarts12346@firstmongodbproject.2bu5zcp.mongodb.net/devMedia",
  );
};

module.exports = connectDB;
