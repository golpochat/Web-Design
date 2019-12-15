//modal for first book on mobile:

// Get the modal element
var modal1 = document.getElementById("simpleModal1");
// Get open Modal btn
var modalBtn1 = document.getElementById("modalBtn1");
//get close btn
var closeBtn1 = document.getElementsByClassName("closeBtn1")[0];
//listen for open click
modalBtn1.addEventListener("click", openModal1);
//listen for close click
closeBtn1.addEventListener("click", closeModal1);
//listen for outside window click
window.addEventListener("click", outsideClick1);

//funtion to open modal
function openModal1() {
  modal1.style.display = "block";
  document.body.style.overflow = "hidden";
}
//funtion to close modal
function closeModal1() {
  modal1.style.display = "none";
  document.body.style.overflow = "auto";
}

//funtion to close modal if outside click
function outsideClick1(e) {
  if (e.taget == modal1) {
    modal1.style.display = "none";
  }
}

//modal for second book on mobile:
// Get the modal element
var modal2 = document.getElementById("simpleModal2");
// Get open Modal btn
var modalBtn2 = document.getElementById("modalBtn2");
//get close btn
var closeBtn2 = document.getElementsByClassName("closeBtn2")[0];
//listen for open click
modalBtn2.addEventListener("click", openModal2);
//listen for close click
closeBtn2.addEventListener("click", closeModal2);
//listen for outside window click
window.addEventListener("click", outsideClick2);

//funtion to open modal
function openModal2() {
  modal2.style.display = "block";
  document.body.style.overflow = "hidden";
}

//funtion to close modal

function closeModal2() {
  modal2.style.display = "none";
  document.body.style.overflow = "auto";
}

//funtion to close modal if outside click
function outsideClick2(e) {
  if (e.taget == modal2) {
    modal2.style.display = "none";
  }
}
window.addEventListener("resize", myResizeFunction);

function myResizeFunction() {
  if (screen.width >= 700) {
    modal2.style.display = "none";
    modal1.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
