// Get the modal element
var modal1 = document.getElementById('simpleModal1');
var modal2 = document.getElementById('simpleModal2');
// Get open Modal btn
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
//get close btn
var closeBtn1 = document.getElementsByClassName('closeBtn1')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
//listen for open click
modalBtn1.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal);
//listen for close click
closeBtn1.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);
//listen for outside window click
window.addEventListener('click', outsideClick);


//funtion to open modal
function openModal(){
    modal1.style.display = 'block';
}
function openModal(){
        modal2.style.display = 'block';
    }

//funtion to close modal
function closeModal(){
    modal1.style.display = 'none';
}
function closeModal(){
        modal2.style.display = 'none';
    }

//funtion to close modal if outside click
function outsideClick(e){
    if(e.taget == modal1){
    modal1.style.display = 'none';
    }
}
function outsideClick(e){
        if(e.taget == modal2){
        modal2.style.display = 'none';
        }
    }