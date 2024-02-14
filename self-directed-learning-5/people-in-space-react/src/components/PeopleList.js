import "./PeopleList.css";

export default function PeopleList({ people, filter }) {
  return (
    <ul>
      {people
        .filter((man) => man.craft.includes(filter))
        .map((man, index) => (
          <li key={index}>
            Name: <span>{man.name}</span>, Craft: <span>{man.craft}</span>
          </li>
        ))}
    </ul>
  );
}
