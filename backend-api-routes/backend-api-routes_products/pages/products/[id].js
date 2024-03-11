import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
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
