import { StyledForm, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";

export default function ReviewForm({ id }) {
  const { mutate } = useSWR(`/api/${id}`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);

    const response = await fetch(`/api/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    if (response.ok) {
      mutate();
    }

    event.target.reset();
    event.target.title.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Add a Review</h3>
      <StyledLabel htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Review:
        <input type="text" id="text" name="text" />
      </StyledLabel>
      <StyledLabel htmlFor="rating">
        Rating:
        <input type="number" id="rating" name="rating" min="0" max="5" />
      </StyledLabel>
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
}
