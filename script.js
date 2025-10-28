const slider = document.getElementById("slider");
document.getElementById("left-btn").onclick = () => {
  slider.scrollBy({ left: -240, behaviour: "smooth" });
};
document.getElementById("right-btn").onclick = () => {
  slider.scrollBy({ left: 240, behaviour: "smooth" });
};
