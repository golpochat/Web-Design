// Get the modal element
var modal2 = document.getElementById('simpleModal2');
// Get open Modal btn
var modalBtn2 = document.getElementById('modalBtn2');
//get close btn
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
//listen for open click
modalBtn2.addEventListener('click', openModal2);
//listen for close click
closeBtn2.addEventListener('click', closeModal2);
//listen for outside window click
window.addEventListener('click', outsideClick2);


//funtion to open modal
function openModal2(){
        modal2.style.display = 'block';
    }

//funtion to close modal

function closeModal2(){
        modal2.style.display = 'none';
    }

//funtion to close modal if outside click
function outsideClick2(e){
        if(e.taget == modal2){
        modal2.style.display = 'none';
        }
    }