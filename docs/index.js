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
