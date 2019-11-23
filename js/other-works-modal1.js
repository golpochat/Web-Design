// Get the modal element
var modal1 = document.getElementById('simpleModal1');
// Get open Modal btn
var modalBtn1 = document.getElementById('modalBtn1');
//get close btn
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
//listen for open click
modalBtn1.addEventListener('click', openModal1);
//listen for close click
closeBtn1.addEventListener('click', closeModal1);
//listen for outside window click
window.addEventListener('click', outsideClick1);


//funtion to open modal
function openModal1(){
    modal1.style.display = 'block';
}
//funtion to close modal
function closeModal1(){
    modal1.style.display = 'none';
}

//funtion to close modal if outside click
function outsideClick1(e){
    if(e.taget == modal1){
    modal1.style.display = 'none';
    }
}
