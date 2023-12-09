const mongoose = require('mongoose');
// const port=process.env.PORT || 27017;

// const connection = mongoose.connect(connectDB());
// function connectDB() {

//     console.log('Connected to database');
//     return `mongodb://127.0.0.1:${port}/application`
// }
// mongoose.connection.on("connected", function () {
//     console.log(`connection is success ${mongoose.connection.host} ${mongoose.connection.name}`);
// });

// mongoose.connection.on("error", function (err) {
//      console.log("Mongoose connection error: " + err);
// });

// mongoose.connection.on("disconnected", function () {
//      console.log("Mongoose connection disconnected");
// });
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;