// Automātiski ieliek pašreizējo gadu footerī
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Uzdevumu atzīmēšanas animācija
const checkboxes = document.querySelectorAll(".task-list input");

checkboxes.forEach(box => {
  box.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.background = "#c8e6c9";
    } else {
      this.parentElement.style.background = "white";
    }
  });
});
