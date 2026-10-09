const buttons = document.querySelectorAll(".newsheaderdiv");
const newsElements = document.querySelectorAll(".news");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    newsElements[index].classList.toggle("open");
  });
});