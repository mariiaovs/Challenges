import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "🍌 Banana", id: 1, color: "yellow" },
    { name: "🍊 Orange", id: 2, color: "orange" },
    { name: "🍎 Apple", id: 3, color: "red" },
    { name: "🍐 Pear", id: 4, color: "green" },
    { name: "🥝 Kiwi", id: 5, color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          name={fruit.name}
          className={`card--${fruit.color}`}
        />
      ))}
    </div>
  );
}
