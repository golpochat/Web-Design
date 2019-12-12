//This function is for the view more button

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  $(".dots").slideToggle("fast");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View past events";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
