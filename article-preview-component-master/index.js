const Button = document.querySelector('.share-btn');
const tooltip = document.querySelector(".share-tooltip");


function toggleShare(){
    tooltip.classList.toggle('hidden');
    Button.classList.toggle('active');

    if(!tooltip.classList.contains('hidden')){
        document.addEventListener('click', closelistener);
    }else {
        document.removeEventListener('click', closelistener)
    }
}


function closelistener(e){
    if(!tooltip.contains(e.target) && !Button.contains(e.target)){
        tooltip.classList.add('hidden');
        Button.classList.remove('active');
    }
}

Button.addEventListener('keydown', (e)=> {
    if (e.key === "Enter" || e.key == ' '){
        toggleShare();
    }
})
Button.addEventListener('click', toggleShare);