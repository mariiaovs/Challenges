import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";
import ReviewForm from "../ReviewForm";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      setIsEditMode(false);
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <>
        <h1>Page not found</h1>
        <StyledLink href="/">Back to all</StyledLink>
      </>
    );
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </button>
      <button type="button" onClick={handleDeleteProduct}>
        Delete
      </button>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          isEditMode={isEditMode}
          values={data}
        />
      )}
      <br />
      <ReviewForm id={id} />
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
