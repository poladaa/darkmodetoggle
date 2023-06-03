"use strict";
const body = document.querySelector("body");
const input = document.querySelector(".input");
const label = document.querySelector(".label");

/////////

input.addEventListener("click", () => {
  updateBody();
  updateLocalStorage();
});

//
input.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
//

function updateBody() {
  if (input.checked) {
    body.style.backgroundColor = "#212529";
  } else {
    body.style.backgroundColor = "#fff";
  }
}

////////
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
