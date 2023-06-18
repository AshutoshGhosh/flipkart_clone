import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecomm-webapp.rozygy8.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully!!");
  } catch (e) {
    console.log(`Database connection error: ${e.message}`);
  }
};

export default Connection;
