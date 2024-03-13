import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;

  const product = getProductById(id);

  console.log(typeof product);

  if (!product) {
    return response.status(404).json({ error: "Not Found" });
  }

  response.status(200).json(product);

  //response.status(200).json(getProductById(id));
}
