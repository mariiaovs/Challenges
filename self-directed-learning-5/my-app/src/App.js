import { useEffect, useState } from "react";
import "./App.css";
import PeopleList from "./components/PeopleList";
import FilterButton from "./components/FilterButton";

function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://api.open-notify.org/astros.json");
        const data = await response.json();
        setNumberInSpace(data.number);
        setPeopleInSpace(data.people);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>People in Space: {numberInSpace}</h1>
      <FilterButton text="All" handleClick={() => setFilter("")} />
      <FilterButton text="ISS" handleClick={() => setFilter("ISS")} />
      <FilterButton text="Tiangong" handleClick={() => setFilter("Tiangong")} />
      <PeopleList people={peopleInSpace} filter={filter} />
    </main>
  );
}

export default App;
