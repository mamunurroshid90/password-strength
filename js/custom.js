const input = document.getElementById("input");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

input.addEventListener("input", () => {
  if (input.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (input.value.length < 4) {
    strength.innerHTML = "weak";
    message.style.color = "#ff5925";
    input.style.borderColor = "#ff5925";
  } else if (input.value.length > 4 && input.value.length < 8) {
    strength.innerHTML = "medium";
    message.style.color = "yellow";
    input.style.borderColor = "yellow";
  } else if (input.value.length >= 8) {
    strength.innerHTML = "strong";
    message.style.color = "#26d730";
    input.style.borderColor = "#26d730";
  }
});
