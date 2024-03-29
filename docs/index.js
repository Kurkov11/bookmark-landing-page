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

let rotatedArrow1 = false;
let rotatedArrow2 = false;
let rotatedArrow3 = false;
let rotatedArrow4 = false;

for(let i = 1; i <= 4; i++){
    const currentArrow = document.getElementById(`arrow-${String(i)}`);
    const currentPath = document.getElementById(`path-${String(i)}`);
    const currentAnswer = document.getElementById(`answer-${String(i)}`);
    const currentQuestion = document.getElementById(`question-${String(i)}`);

    currentQuestion.onclick = function(){
        if(i === 1){
            if(rotatedArrow4 === false){
                rotatedArrow4 = true;
            }else{
                rotatedArrow4 = false;
            }
        }else if(i === 2){
            if(rotatedArrow4 === false){
                rotatedArrow4 = true;
            }else{
                rotatedArrow4 = false;
            }
        }else if(i === 3){
            if(rotatedArrow4 === false){
                rotatedArrow4 = true;
            }else{
                rotatedArrow4 = false;
            }
        }else if(i === 4){
            if(rotatedArrow4 === false){
                rotatedArrow4 = true;
            }else{
                rotatedArrow4 = false;
            }
        }
        if(rotatedArrow1 || rotatedArrow2 || rotatedArrow3 || rotatedArrow4){
            currentArrow.style.transform = "rotate(180deg)";
            currentPath.style.stroke = "hsl(0, 94%, 66%)";
            currentAnswer.style.display = 'block';
            currentQuestion.style.borderBottomWidth = '0px';
        }else{
            currentArrow.style.transform = "rotate(0deg)";
            currentPath.style.stroke = "#5267DF";
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
        document.getElementById(`features-${i}`).style.color = 'black';
        document.getElementById(`features-tab-${i}`).style.display = 'block'; 
        document.getElementById(`features-text-${i}`).style.display = 'block';

        for(let j = 1; j <= 3; j++){
            if(j != i){ 
                document.getElementById(`features-${j}`).style.color = 'hsl(229, 8%, 60%)'; //Grayish Blue
                document.getElementById(`features-tab-${j}`).style.display = 'none';
                document.getElementById(`features-text-${j}`).style.display = 'none';
            }
        }

        //Move the orange line
        const orangeLineParent = document.getElementById("orange-line-parent");
        const orangeLine = document.getElementById("orange-line");
        const orangeLine2 = document.getElementById("orange-line-2");
        const orangeLine3 = document.getElementById("orange-line-3");

        if(i === 1){
            orangeLine.style.transform = "translateY(-4px)"
            orangeLine2.style.transform = "translateY(0px)"
            orangeLine3.style.transform = "translateY(0px)"
        }else if(i === 2){
            orangeLine2.style.transform = "translateY(-4px)"
            orangeLine.style.transform = "translateY(0px)"
            orangeLine3.style.transform = "translateY(0px)"
        }else if(i === 3){
            orangeLine3.style.transform = "translateY(-4px)"
            orangeLine.style.transform = "translateY(0px)"
            orangeLine2.style.transform = "translateY(0px)"
        }

        //Move the desktop orange line
        const orangeLineDesktop = document.getElementById("orange-line-desktop");
        if(i === 1){
            orangeLineDesktop.style.transform = "translateX(0)";
        }else if(i === 2){
            orangeLineDesktop.style.transform = "translateX(251.21px)";
        }else if(i === 3){
            orangeLineDesktop.style.transform = "translateX(502.42px)";
        }
    }
}