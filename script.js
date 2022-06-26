const emailRegex = /^\S+@\S+\.\S+$/;
let pTag = document.createElement("p");
const input = document.querySelector(".content-inner");
const inputBox = document.querySelector("#input");

function checkEmail(event) {
  event.preventDefault();
  let email = emailRegex.test(inputBox.value);

  if (email !== true) {
    pTag.className = "error";
    pTag.innerHTML = `Please provide a valid email`;
    inputBox.classList.add("fail");
    input.appendChild(pTag);
  } else if (email === true) {
    pTag.className = "confirm";
    pTag.innerHTML = `Thank you for submiting your email`;
    inputBox.classList.add("success");
    input.appendChild(pTag);
  }
}

// todo: Remove the errors on click of the input
function removeElement() {
  pTag.remove();
  inputBox.classList.remove("success", "fail");
}
