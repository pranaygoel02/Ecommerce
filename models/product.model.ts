import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    images: [String],
    brand: String,
    variants: [
      {
        name: String,
        color: String,
        images: [String],
        countInStock: Number,
      },
    ],
    rating: Number,
    numReviews: Number,
    countInStock: Number,
    discount: Number,
    isFeatured: Boolean,
    listedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;
