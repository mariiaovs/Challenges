import { useRouter } from "next/router";
import useSWR from "swr";

//const fetcher = (url) => fetch(url).then((response) => response.json());

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  console.log(product);

  if (error) return <div>Failed to load {error.status}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!product) return;
  return (
    <>
      <h1>Name: {product.name}</h1>
      <p>ID: {product.id}</p>
      <p>Description: {product.description}</p>
      <p>
        Price: {product.price} {product.currency}
      </p>
      <p>Category: {product.category}</p>
    </>
  );
}
