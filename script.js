const containerElement = document.querySelector(".container");

containerElement.addEventListener("mouseover", () => {
  containerElement.style.opacity = 0.8;
});

containerElement.addEventListener("mouseout", () => {
  containerElement.style.opacity = 1;
});
