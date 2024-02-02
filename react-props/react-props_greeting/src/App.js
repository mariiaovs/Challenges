import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Feline" />
      <Greeting name="Anja" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Feline" ? "Coach" : name}!</h1>;
}
