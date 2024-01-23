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
    const currentQuestion = document.getElementById(`question-${String(i)}`);

    currentQuestion.onclick = function(){
        if(currentArrow.style.display !== 'none'){
            currentArrow.style.display = 'none';
            currentArrowDown.style.display = 'block';
            currentAnswer.style.display = 'block';
            currentQuestion.style.borderBottomWidth = '0px';
        }else{
            currentArrow.style.display = 'block';
            currentArrowDown.style.display = 'none';
            currentAnswer.style.display = 'none';
            currentQuestion.style.borderBottomWidth = '0.5px';
        }
    }
}

const newsletterForm = document.getElementById('newsletter');
const newsletterInput = document.getElementById('newsletter-input');
const newsletterErrorIcon = document.getElementById('newsletter-error-icon');
const errorMsg = document.getElementById('error-msg');

newsletterForm.addEventListener('submit', (e) => {

    let errorOcurred = false;

    if(newsletterInput.value === ''){
        errorOcurred = true;
    }

    if(!newsletterInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorOcurred = true;
    }

    if(errorOcurred){
        e.preventDefault();
        newsletterErrorIcon.style.display = 'block';
        newsletterInput.style.borderWidth = '2px';
        errorMsg.style.display = 'block';
    }else{
        newsletterErrorIcon.style.display = 'none';
        newsletterInput.style.borderWidth = '0';
        errorMsg.style.display = 'none';
    }
});

for(let i = 1; i <= 3; i++){
    document.getElementById(`features-${i}`).onclick = function(){
        document.getElementById(`features-tab-${i}`).style.display = 'block'; 
        document.getElementById(`features-text-${i}`).style.display = 'block';

        for(let j = 1; j <= 3; j++){
            if(j != i){
                document.getElementById(`features-tab-${j}`).style.display = 'none';
                document.getElementById(`features-text-${j}`).style.display = 'none';
            }
        }
    }
}