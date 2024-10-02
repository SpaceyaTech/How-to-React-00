// When we click a grid item, we want to change the background color of the grid item to a color that is not already on one of the other grid items.

// Get the grid container
const gridContainer = document.querySelector(".grid-container");

// Create a list of colors
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
];

// Create a list of colors that have been used
let usedColors = [];

// Create a function that returns a random color

function getRandomColor() {
  // Get a random number between 0 and the length of the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Get the color at the random index
  const randomColor = colors[randomIndex];

  // Check if the random color has already been used
  if (usedColors.length === colors.length) {
    // Reset usedColors if all colors have been used
    usedColors = [];
  }

  if (usedColors.includes(randomColor)) {
    // If the random color has been used, call the function again
    return getRandomColor();
  } else {
    // If the random color has not been used, add the color to the usedColors array
    usedColors.push(randomColor);
    // Return the random color
    return randomColor;
  }
}

// Get all the grid items
const gridItems = document.querySelectorAll(".grid-item");

// Loop through all the grid items
gridItems.forEach((gridItem) => {
  // Add a click event listener to each grid item
  gridItem.addEventListener("click", () => {
    // Change the background color of the grid item
    gridItem.style.backgroundColor = getRandomColor();
  });
});
