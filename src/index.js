import "./styles.css";

const liProjects = document.getElementById(`projects`);
const dropDownMenu = document.getElementById(`dropdown`);

liProjects.addEventListener(`click`, () => {
  dropDownMenu.classList.toggle("show");
});

// CLick outside the box to close the dropdown menu