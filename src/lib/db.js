import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Connected to mongo db ${conn.connection.host}`);
  } catch (error) {
    console.log("error connecting to mongo db");
    process.exit(1);
  }
};
export default connectDB;
