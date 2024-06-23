import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.kjvqwtb.mongodb.net/perfume_store?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
      console.log("connected to DB");
    })
    .catch((e) => {
      console.log("error connecting with DB", e);
    });
};

export default connectDB;
