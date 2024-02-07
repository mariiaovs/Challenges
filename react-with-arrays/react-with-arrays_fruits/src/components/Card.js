import "./Card.css";

export default function Card({ name, className }) {
  return <p className={className}>{name}</p>;
}
