const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".productContainer");
console.log("sidenVises");

fetch(`https://dummyjson.com/recipes/1`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <img
    src="/imgs/mad.webp"
    alt="placeholder"
    class="image_container"
    />

    <h1> ${data.name}</h1>
    
    <section class="productDetails">
    <h2>  Servings : ${data.servings}</h2>

<br></>

     <h2>Prep time : ${data.prepTimeMinutes} minutes</h2>
     <h2>Cook time : ${data.cookTimeMinutes} minutes</h2>
     
     <br></>
     <div class=divider></div>
    <div class=blaa_border>
    <h3>
    Ingredients :
    </h3>
    <h2> ${data.ingredients}</h2>

     <div class=divider></div>

<br></>

    <h3>
    Instructions :
    </h3>
   <h2> ${data.instructions}</h2>

<br></>
<br></>
<br></>


   <h2 class=h2_reviews>  Reviews : ${data.servings}</h2>
   <div/>
    </section>
    </main>
    `;
  });
