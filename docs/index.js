let faqOptions = document.getElementsByClassName("FAQs-option");

for(const faqOption of faqOptions){
    console.log(faqOption);
}

document.querySelector('#mobile-menu-icon').onclick = function() {
    document.querySelector('#mobile-menu').style.display = 'flex';
}
document.querySelector('#mobile-close-icon').onclick = function() {
    document.querySelector('#mobile-menu').style.display = 'none'; 
}
