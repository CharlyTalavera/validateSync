import mongoose, { Schema } from "mongoose";

type Product = {
  age: number;
  name: string;
};
const ProductSchema = new Schema({
  age: { type: Number, required: true },
  name: { type: String, required: true },
});

const ProductModel = mongoose.model("product", ProductSchema);

const save = (product: Product) => {
  const toInsert = new ProductModel(product);

  const errors = toInsert.validateSync();

  if (errors) {
    throw errors;
  }

  // Si el input es valid. Llamo al ProductDAO.insert() correspondiente
  console.log("Input valid! ✅");
};

save({ age: 17, name: "charly" });
