import "./styles.css";

const liProjects = document.getElementById(`projects`);
const dropDownMenu = document.getElementById(`dropdown`);

liProjects.addEventListener(`mouseover`, () => {
  dropDownMenu.classList.toggle("show");
});

// CLick outside the box to close the dropdown menu
document.addEventListener("mouseover", (event) => {
  const isClickInside =
    liProjects.contains(event.target) || dropDownMenu.contains(event.target);

  if (!isClickInside) {
    dropDownMenu.classList.remove("show");
  }
});
