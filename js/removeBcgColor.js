const body = document.querySelector("body");
const img1 = document.querySelector(".remove-bcg__remove-color1");
const img2 = document.querySelector(".remove-bcg__remove-color2");
const img3 = document.querySelector(".remove-bcg__remove-color3");
const img4 = document.querySelector(".remove-bcg__remove-color4");

document.querySelector(".remove-bcg").addEventListener("mouseover", (event) => {
    event.target.classList.toggle("remove__border_color1");
});

document.querySelector(".remove-bcg").addEventListener("mouseout", (event) => {
    event.target.classList.remove("remove__border_color1");
});

img1.addEventListener("click", () => {
    body.classList.toggle("remove-bcg__body1");
    body.classList.remove("remove-bcg__body2");
    body.classList.remove("remove-bcg__body3");
    body.classList.remove("remove-bcg__body4");
});
img2.addEventListener("click", () => {
    body.classList.remove("remove-bcg__body1");
    body.classList.toggle("remove-bcg__body2");
    body.classList.remove("remove-bcg__body3");
    body.classList.remove("remove-bcg__body4");
});
img3.addEventListener("click", () => {
    body.classList.remove("remove-bcg__body1");
    body.classList.remove("remove-bcg__body2");
    body.classList.toggle("remove-bcg__body3");
    body.classList.remove("remove-bcg__body4");
});
img4.addEventListener("click", () => {
    body.classList.remove("remove-bcg__body1");
    body.classList.remove("remove-bcg__body2");
    body.classList.remove("remove-bcg__body3");
    body.classList.toggle("remove-bcg__body4");
});
