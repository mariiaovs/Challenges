export default function ManInSpace(props) {
  const manInSpace = document.createElement("li");
  manInSpace.innerHTML = `
    <p class="name">Name: ${props.name}</p>
    <p class="craft">Craft: ${props.craft}</p>`;
  return manInSpace;
}
