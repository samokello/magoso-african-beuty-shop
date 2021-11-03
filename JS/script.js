const myIcon = document.getElementById("fa-moon");

myIcon.addEventListener("click", () => {
  if (myIcon.classList.contains("fa-moon")) {
    document.body.classList.add("dark");
    myIcon.classList.remove("fa-moon");
    myIcon.classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark");
    myIcon.classList.remove("fa-sun");
    myIcon.classList.add("fa-moon");
  }
});
