import ManInSpace from "./components/ManInSpace.js";

const peopleInSpaceNumber = document.querySelector(
  '[data-js="people-in-space"]'
);
const listOfPeople = document.querySelector('[data-js="list-people"]');
const buttons = document.querySelectorAll('[data-js*="button"]');

async function fetchData() {
  try {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    peopleInSpaceNumber.textContent = data["number"];
    return data.people;
  } catch (error) {
    console.error(error);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    listOfPeople.innerHTML = "";
    let filterQuery = "";
    if (button.textContent === "All") {
      filterQuery = "";
    } else if (button.textContent === "ISS") {
      filterQuery = "ISS";
    } else if (button.textContent === "Tiangong") {
      filterQuery = "Tiangong";
    }
    fetchData().then((data) => {
      data
        .filter((man) => man.craft.includes(filterQuery))
        .forEach((man) => {
          const listElement = ManInSpace(man);
          listOfPeople.append(listElement);
        });
    });
  })
);
