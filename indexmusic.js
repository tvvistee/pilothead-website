const buttons = document.querySelectorAll(".buttondiv");
const newsElements = document.querySelectorAll(".buttoncontent");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    newsElements[index].classList.toggle("open");
  });
});