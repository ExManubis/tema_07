// CONSTANTS
const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".productContainer");
const starsFull = `<img src="../imgs/single/star_filled.svg" alt="star">`;
const starsEmpty = `<img src="../imgs/single/star.svg" alt="star">`;

// FETCH AND RENDER DATA
window.addEventListener("load", () => {
  fetch(`https://dummyjson.com/recipes/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      productContainer.innerHTML = `
    <img
    src="https://cdn.dummyjson.com/recipe-images/${productId}.webp"
    alt="placeholder"
    class="image_container"
    />

    <div class="info_container">
    <h1> ${data.name}</h1>
    <div class="desktop_container">
     <img
    src="https://cdn.dummyjson.com/recipe-images/${productId}.webp"
    alt="placeholder"
    class="image_desktop"
    />
    <div class="arrow_container">
         <img
    src="../imgs/arrow.svg"
    alt="placeholder"
    class="arrow"
    />
    <div class="shadow">
    <div class="div_1">
    <h2>  Servings : ${data.servings}</h2>
    <br>
     <h2>Prep time : ${data.prepTimeMinutes} min.</h2>
     <h2>Cook time : ${data.cookTimeMinutes} min.</h2>
    </div>
    <div class=div_2>
    <h3>
    Ingredients :
    </h3>
    <ul class="card_list">
    ${data.ingredients.map((ingredient) => `<li><h2>${ingredient}</h2></li>`).join("")}
    </ul>
    </div>
    <div class="div_3">
    <h3>
    Instructions :
    </h3>
    <ul class="card_list">
    ${data.instructions.map((instruction) => `<li><h2>${instruction}</h2></li>`).join("")}
    </ul>
    </div>
      <div class="div_4">
   <h2 class=h2_reviews> <div class="rating">${data.reviewCount} Reviews : ${starsFull.repeat(Math.floor(data.rating))}${starsEmpty.repeat(5 - Math.floor(data.rating))}</div></h2>
   </div>
   </div>
   </div>
   </div>
   </div>
    </main>
    `;
    });
});
