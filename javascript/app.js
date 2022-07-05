// On Scroll function

function navMenu(){
  let navBar = document.querySelector('.navbar-sticky');
  let scrollTopButton = document.querySelector('#scrollUp');

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if(scroll >= 120){
      navBar.classList.add("navbar-sticky-moved-up");
    }else(
      navBar.classList.remove("navbar-sticky-moved-up")
    )
  }

  // Apply Transition
  if(scroll >= 250){
    navBar.classList.add("navbar-sticky-transitioned");
    // scrollTopButton.classList.add("acrollActive");
  }else{
    navBar.classList.remove("navbar-sticky-transitioned");
    // scrollTopButton.classList.remove("acrollActive");
  }
    // sTICKY ON
    if(scroll >= 500){
      navBar.classList.add("navbar-sticky-on")
    }else{
      navBar.classList.remove("navbar-sticky-on")
    }
}
navMenu();

// counter

const count = document.querySelector('#count1');

let counter1 = 0;
setInterval(()=>{
  counter1++;
      if(counter1 <= 10){
       
      count.innerText = counter1;
      }
},1000)


const count2 = document.querySelector('#count2');
 let counter2 = 0;
 setInterval(() => {
      counter2++;
      if(counter2 <= 23){
        count2.innerText = counter2 ;
      }

 },1000);

const count3 = document.querySelector('#count3');
let counter3 = 0;

setInterval(()=>{
  counter3++;
  if(counter3 <= 30){
    count3.innerText = counter3;
  }
},1000)

const count4 = document.querySelector('#count4');
let counter4 = 0;
setInterval(()=>{
  counter4++;
  
   if(counter4 <= 12){
    count4.innerText = counter4;
   }
},1000)

// app_SCREEn

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
