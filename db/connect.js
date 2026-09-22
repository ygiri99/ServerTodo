import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.error("Error connecting to db:", error);
  }
};

export default db;
