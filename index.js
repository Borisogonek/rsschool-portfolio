
 



$(document).ready(function() {
   $('.burger').click(function(event) {
       $('.burger,.header_menu').toggleClass('active');
       
   });
});


const portfolioBtn1 = document.querySelector('.btn1');
const portfolioBtn2 = document.querySelector('.btn2');
const portfolioBtn3 = document.querySelector('.btn3');
const portfolioBtn4 = document.querySelector('.btn4');

const but = document.querySelectorAll('.button')
const portfolioImage = document.querySelector('.photos_img');
const portfolioImages = document.querySelectorAll('.photos_img');

const portfolioBtns = document.querySelector('.button');

const eng = document.querySelector('.lang_en');

const rus = document.querySelector('.lang_ru');

const textTranslate = document.querySelectorAll('[data-i18]');

const seasons = ['winter', 'spring', 'summer', 'autumn'];

portfolioBtn1.addEventListener('click', () => {
   
   portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
   but.forEach(e => e.classList.remove('active'));
   portfolioBtn1.classList.add('active');
});

portfolioBtn2.addEventListener('click', () => {
   
   portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
   but.forEach(e => e.classList.remove('active'));
   portfolioBtn2.classList.add('active');
});

portfolioBtn3.addEventListener('click', () => {
   
   portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
   but.forEach(e => e.classList.remove('active'));
   portfolioBtn3.classList.add('active');
});

portfolioBtn4.addEventListener('click', () => {
   
   portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
   but.forEach(e => e.classList.remove('active'));
   portfolioBtn4.classList.add('active');
});







// function changeImage(event) {
//    if(event.target.classList.contains('midle_portfolio')) {
//       portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.seasons}/${index + 1}.jpg`);
//       portfolioBtns.forEach(button => button.classList.remove('active'));
//       event.target.classList.add('active')
//    }
//  }


// portfolioBtns.addEventListener('click',changeImage)




