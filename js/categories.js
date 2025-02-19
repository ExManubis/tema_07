// CONSTANTS
const categoryContainer = document.querySelector(".category_container");

// FETCH TAGS AND RENDER
window.addEventListener("load", () => {
  fetch("https://dummyjson.com/recipes/tags")
    .then((response) => response.json())
    .then((data) => {
      const content = data
        .map(
          (tag) => `
                   <a href="./list.html?tag=${tag}"
          ><div class="box">
            <h3>${tag}</h3>
            <svg
              width="30"
              height="auto"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L23.7336 25.302M23.7336 25.302V2M23.7336 25.302H2"
                stroke="#061BA8"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg></div
        ></a>
            `,
        )
        .join("");
      categoryContainer.innerHTML = content;
    });
});
