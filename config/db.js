const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const URI="mongodb+srv://hamza:53865586@cluster0.dxxor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB CONNECTED...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};


module.exports = connectDB;
