function myFunction() {
  var dots = document.getElementById("dots");
  var moreReviews = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More";
    moreReviews.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreReviews.style.display = "inline";
  }
}
