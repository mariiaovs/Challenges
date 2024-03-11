import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ProductsPage() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!products) return;
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h2>Name: {product.name}</h2>
              <p>ID: {product.id}</p>
              <p>Description: {product.description}</p>
              <p>
                Price: {product.price} {product.currency}
              </p>
              <p>Category: {product.category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
