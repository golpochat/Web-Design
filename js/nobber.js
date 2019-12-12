// JS for More button

function myFunction() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    more.style.display = "inline";
  }
}
