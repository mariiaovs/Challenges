import "./FilterButton.css";

export default function FilterButton({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}
