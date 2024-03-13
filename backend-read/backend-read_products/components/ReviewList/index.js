export default function ReviewList({ reviews }) {
  console.log(reviews);
  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <h3>{review.title}</h3>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
