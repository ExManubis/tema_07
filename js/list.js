// CONSTANTS
const hero = document.querySelector(".hero");
const filterOption = document.querySelector(".tag");
const listGrid = document.querySelector(".list_grid");
const getUrl = window.location.search;
const getSearch = new URLSearchParams(getUrl);
const tag = getSearch.get("tag");
const mealType = getSearch.get("mealtype");

// FETCH DATA AND RENDER
window.addEventListener("load", () => {
  renderFilters();
  if (tag === null && mealType === null) {
    let endPoint = `https://dummyjson.com/recipes?limit=0`;
    let heroTitle = "All Recipes";
    renderData(endPoint, heroTitle);
  } else if (mealType === null) {
    let endPoint = `https://dummyjson.com/recipes/tag/${tag}`;
    let heroTitle = tag;
    renderData(endPoint, heroTitle);
  } else {
    let endPoint = `https://dummyjson.com/recipes/meal-type/${mealType}`;
    let heroTitle = mealType;
    renderData(endPoint, heroTitle);
  }
});

// RENDER FILTERS
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
      filterOption.innerHTML = `
      <option value ="">Tag: </option>
      ${filterContent}`;
    });
}

// RENDER & SHOW DATA FUNCTION
function renderData(endPoint, heroTitle) {
  fetch(`${endPoint}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const markup = data.recipes
        .map(
          (recipe) => `
          <div class="card">
          <a href="./single.html?id=${recipe.id}">
            <div class="title">
              ${recipe.name}
              <img src="../imgs/arrow.svg" alt="arrow" />
            </div>
            <img
              src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp"
              alt=""
              class="card_image"
            />
            <div class="info">
              <h3>${recipe.cuisine}</h3>
              <h3>${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min.</h3>
              <h3>Difficulty - ${recipe.difficulty}</h3>
            </div>
          </a>
        </div>
          `,
        )
        .join("");
      listGrid.innerHTML = markup;
      hero.textContent = `${heroTitle}`;
    });
}
