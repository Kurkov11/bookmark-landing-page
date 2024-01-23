let faqOptions = document.getElementsByClassName("FAQs-option");

for(const faqOption of faqOptions){
    console.log(faqOption);
}

document.querySelector('#mobile-menu-icon').onclick = function() {
    document.querySelector('#mobile-menu').style.display = 'flex';
    document.querySelector('#body').style.overflow = 'hidden';
    document.querySelector('#hamburger-and-logo').style.visibility = 'hidden';
}
document.querySelector('#mobile-close-icon').onclick = function() {
    document.querySelector('#mobile-menu').style.display = 'none';
    document.querySelector('#body').style.overflow = 'auto'; 
    document.querySelector('#hamburger-and-logo').style.visibility = 'visible';
}

for(let i = 1; i <= 4; i++){
    const currentArrow = document.getElementById(`arrow-${String(i)}`);
    const currentArrowDown = document.getElementById(`arrow-down-${String(i)}`);
    const currentAnswer = document.getElementById(`answer-${String(i)}`);

    document.getElementById(`question-${String(i)}`).onclick = function(){
        if(currentArrow.style.display !== 'none'){
            currentArrow.style.display = 'none';
            currentArrowDown.style.display = 'block';
            currentAnswer.style.display = 'block';
        }else{
            currentArrow.style.display = 'block';
            currentArrowDown.style.display = 'none';
            currentAnswer.style.display = 'none';
        }
    }
}