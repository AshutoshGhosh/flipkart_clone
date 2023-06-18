import { products } from "./constants/data.js";
import Product from "./models/productSchema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);

    console.log("Default Data Inserted Successfully");
  } catch (e) {
    console.log(`Error while inserting default data: ${e.message}`);
  }
};

export default DefaultData;
