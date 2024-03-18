import Review from "@/db/models/Review";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "POST") {
    try {
      const reviewData = request.body;
      const createdReview = await Review.create(reviewData);

      const reviewId = createdReview._id;

      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Product not found" });
      }

      product.reviews.push(reviewId);

      await product.save();

      response.status(201).json({ status: "Review created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "PUT") {
    const updatedProduct = request.body;

    await Product.findByIdAndUpdate(id, updatedProduct);
    response.status(200).json({ status: "Product successfully updated." });
  }

  if (request.method === "DELETE") {
    const product = await Product.findById(id);
    product.reviews.forEach(async (review) => {
      await Review.findByIdAndDelete(review);
    });

    await Product.findByIdAndDelete(id);

    response.status(200).json({ status: "Product successfully deleted." });
  }
}
