// CONSTANTS
const selector = document.querySelector("select");

// FUNCTION
function renderFilters() {
  fetch(`https://dummyjson.com/recipes/tags`)
    .then((response) => response.json())
    .then((data) => {
      const filterContent = data
        .map(
          (filter) => `
      <option value="${filter}">${filter}</option>
     `,
        )
        .join("");
      selector.innerHTML = `
        <option value ="">Please Select:</option>
        ${filterContent}`;
    });
}

// RUN SCRIPT
renderFilters();
