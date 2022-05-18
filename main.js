const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

/* BURGIR */
const hamburger=document.getElementById("hamburger");
const prviBurger=document.getElementById("prviBurger");
const drugiBurger=document.getElementById("drugiBurger");
const treciBurger=document.getElementById("treciBurger");
const navUl=document.getElementById("nav");

hamburger.addEventListener("click",() =>{
    navUl.classList.toggle("show");

    prviBurger.classList.toggle("burgeri");
    drugiBurger.classList.toggle("burgeri");
    treciBurger.classList.toggle("burgeri");

    drugiBurger.classList.toggle("drugiBurger");
    treciBurger.classList.toggle("treciBurger");
})
/*Carusel*/

const buttons=document.querySelectorAll("[data-carusel-button]");

buttons.forEach(button =>{
    button.addEventListener("click",() => {
        const offset=button.dataset.caruselButton==="next"?1:-1
        const slides=button.closest("[data-carusel]").querySelector("[data-slides]")


        const activeSlide=slides.querySelector("[data-active]")
        let newIndex=[...slides.children].indexOf(activeSlide)+offset
        if(newIndex<0) newIndex=slides.children.length-1
        if(newIndex>=slides.children.length) newIndex=0


        slides.children[newIndex].dataset.active=true
        delete activeSlide.dataset.active
    })
})


/*Slides*/

const slideshowIMGS= document.getElementsByClassName("slide");

const nextImageDisplay=3000;
let currentImageCounter=0;


setInterval(nextImage,nextImageDisplay);
function nextImage(){
    slideshowIMGS[currentImageCounter].style.opacity=0;
    currentImageCounter=(currentImageCounter+1)%slideshowIMGS.length;
  
    slideshowIMGS[currentImageCounter].style.opacity=1;
} 

const slideshowIMGS2= document.getElementsByClassName("slide2");

const nextImageDisplay2=3000;
let currentImageCounter2=0;


setInterval(nextImage2,nextImageDisplay2);
function nextImage2(){
    slideshowIMGS2[currentImageCounter2].style.opacity=0;
    currentImageCounter2=(currentImageCounter2+1)%slideshowIMGS2.length;
  
    slideshowIMGS2[currentImageCounter2].style.opacity=1;
}

const slideshowIMGS3= document.getElementsByClassName("slide3");

const nextImageDisplay3=3000;
let currentImageCounter3=0;


setInterval(nextImage3,nextImageDisplay3);
function nextImage3(){
    slideshowIMGS3[currentImageCounter3].style.opacity=0;
    currentImageCounter3=(currentImageCounter3+1)%slideshowIMGS3.length;
  
    slideshowIMGS3[currentImageCounter3].style.opacity=1;
} 

const slideshowIMGS4= document.getElementsByClassName("slide4");

const nextImageDisplay4=3000;
let currentImageCounter4=0;

setInterval(nextImage4,nextImageDisplay4);
function nextImage4(){
    slideshowIMGS4[currentImageCounter4].style.opacity=0;
    currentImageCounter4=(currentImageCounter4+1)%slideshowIMGS4.length;
  
    slideshowIMGS4[currentImageCounter4].style.opacity=1;
} 

const slideshowIMGS5= document.getElementsByClassName("slide5");

const nextImageDisplay5=3000;
let currentImageCounter5=0;


setInterval(nextImage5,nextImageDisplay5);
function nextImage5(){
    slideshowIMGS5[currentImageCounter5].style.opacity=0;
    currentImageCounter5=(currentImageCounter5+1)%slideshowIMGS5.length;
  
    slideshowIMGS5[currentImageCounter5].style.opacity=1;
} 

const slideshowIMGS6= document.getElementsByClassName("slide6");

const nextImageDisplay6=3000;
let currentImageCounter6=0;


setInterval(nextImage6,nextImageDisplay6);
function nextImage6(){
    slideshowIMGS6[currentImageCounter6].style.opacity=0;
    currentImageCounter6=(currentImageCounter6+1)%slideshowIMGS6.length;
  
    slideshowIMGS6[currentImageCounter6].style.opacity=1;
} 

const slideshowIMGS7= document.getElementsByClassName("slide7");

const nextImageDisplay7=3000;
let currentImageCounter7=0;


setInterval(nextImage7,nextImageDisplay7);
function nextImage7(){
    slideshowIMGS7[currentImageCounter7].style.opacity=0;
    currentImageCounter7=(currentImageCounter7+1)%slideshowIMGS7.length;
  
    slideshowIMGS7[currentImageCounter7].style.opacity=1;
} 
/*Learn More fazon*/

const learnMore=document.getElementById("learn");
const text=document.getElementById("Adrenalin");
const rijesi=document.getElementById("naslovslajda")
learnMore.addEventListener("click",()=>{
    if(rijesi.style.opacity==1){
        text.classList.add("learnMoreOpen");
        rijesi.style.opacity=0; 
    }else{
        text.classList.remove("learnMoreOpen");
        rijesi.style.opacity=1;
    }
})

const learnMore1=document.getElementById("learn1");
const text1=document.getElementById("Hiking");
const rijesi1=document.getElementById("naslovslajda1")
learnMore1.addEventListener("click",()=>{
    if(rijesi1.style.opacity==0){
        text1.classList.remove("learnMoreOpen");
        rijesi1.style.opacity=1;
    }else{
        text1.classList.add("learnMoreOpen");
        rijesi1.style.opacity=0;
    }
})
const learnMore2=document.getElementById("learn2");
const text2=document.getElementById("Climbing");
const rijesi2=document.getElementById("naslovslajda2")
learnMore2.addEventListener("click",()=>{
    if(rijesi2.style.opacity==0){
        text2.classList.remove("learnMoreOpen");
        rijesi2.style.opacity=1;
    }else{
        text2.classList.add("learnMoreOpen");
        rijesi2.style.opacity=0;
    }
})
const learnMore3=document.getElementById("learn3");
const text3=document.getElementById("RockClimbing");
const rijesi3=document.getElementById("naslovslajda3")
learnMore3.addEventListener("click",()=>{
    if(rijesi3.style.opacity==0){
        text3.classList.remove("learnMoreOpen");
        rijesi3.style.opacity=1;
    }else{
        text3.classList.add("learnMoreOpen");
        rijesi3.style.opacity=0;
    }
})
const learnMore4=document.getElementById("learn4");
const text4=document.getElementById("SkiTouring");
const rijesi4=document.getElementById("naslovslajda4")
learnMore4.addEventListener("click",()=>{
    if(rijesi4.style.opacity==0){
        text4.classList.remove("learnMoreOpen");
        rijesi4.style.opacity=1;
    }else{
        text4.classList.add("learnMoreOpen");
        rijesi4.style.opacity=0;
    }
})
const learnMore5=document.getElementById("learn5");
const text5=document.getElementById("TraditionalAlpinism");
const rijesi5=document.getElementById("naslovslajda5")
learnMore5.addEventListener("click",()=>{
    if(rijesi5.style.opacity==0){
        text5.classList.remove("learnMoreOpen");
        rijesi5.style.opacity=1;
    }else{
        text5.classList.add("learnMoreOpen");
        rijesi5.style.opacity=0;
    }
})
const learnMore6=document.getElementById("learn6");
const text6=document.getElementById("WinterAlpinism");
const rijesi6=document.getElementById("naslovslajda6")
learnMore6.addEventListener("click",()=>{
    if(rijesi6.style.opacity==0){
        text6.classList.remove("learnMoreOpen");
        rijesi6.style.opacity=1;
    }else{
        text6.classList.add("learnMoreOpen");
        rijesi6.style.opacity=0;
    }
})
/*Ponude PopUpFazoncic*/
const buttonPopUp=document.getElementById('ponudah1');
const popUp=document.getElementById('popUp1');
buttonPopUp.addEventListener('click',()=>{
    popUp.style.transform='scaleY(1)';
    popUp2.style.transform='scaleY(0)';
    popUp3.style.transform='scaleY(0)';
    popUp4.style.transform='scaleY(0)';
    popUp5.style.transform='scaleY(0)';
    popUp6.style.transform='scaleY(0)';
})
const popUpClose=document.getElementById('popUpClose1');
popUpClose.addEventListener('click',()=>{
    popUp.style.transform='scaleY(0)';
})
const buttonPopUp2=document.getElementById('ponudah2');
const popUp2=document.getElementById('popUp2');
buttonPopUp2.addEventListener('click',()=>{
    popUp.style.transform='scaleY(0)';
    popUp2.style.transform='scaleY(1)';
    popUp3.style.transform='scaleY(0)';
    popUp4.style.transform='scaleY(0)';
    popUp5.style.transform='scaleY(0)';
    popUp6.style.transform='scaleY(0)';
})
const popUpClose2=document.getElementById('popUpClose2');
popUpClose2.addEventListener('click',()=>{
    popUp2.style.transform='scaleY(0)';
})
const buttonPopUp3=document.getElementById('ponudah3');
const popUp3=document.getElementById('popUp3');
buttonPopUp3.addEventListener('click',()=>{
    popUp.style.transform='scaleY(0)';
    popUp2.style.transform='scaleY(0)';
    popUp3.style.transform='scaleY(1)';
    popUp4.style.transform='scaleY(0)';
    popUp5.style.transform='scaleY(0)';
    popUp6.style.transform='scaleY(0)';
})
const popUpClose3=document.getElementById('popUpClose3');
popUpClose3.addEventListener('click',()=>{
    popUp3.style.transform='scaleY(0)';
})
const buttonPopUp4=document.getElementById('ponudah4');
const popUp4=document.getElementById('popUp4');
buttonPopUp4.addEventListener('click',()=>{
    popUp.style.transform='scaleY(0)';
    popUp2.style.transform='scaleY(0)';
    popUp3.style.transform='scaleY(0)';
    popUp4.style.transform='scaleY(1)';
    popUp5.style.transform='scaleY(0)';
    popUp6.style.transform='scaleY(0)';
})
const popUpClose4=document.getElementById('popUpClose4');
popUpClose4.addEventListener('click',()=>{
    popUp4.style.transform='scaleY(0)';
})
const buttonPopUp5=document.getElementById('ponudah5');
const popUp5=document.getElementById('popUp5');
buttonPopUp5.addEventListener('click',()=>{
    popUp.style.transform='scaleY(0)';
    popUp2.style.transform='scaleY(0)';
    popUp3.style.transform='scaleY(0)';
    popUp4.style.transform='scaleY(0)';
    popUp5.style.transform='scaleY(1)';
    popUp6.style.transform='scaleY(0)';
})
const popUpClose5=document.getElementById('popUpClose5');
popUpClose5.addEventListener('click',()=>{
    popUp5.style.transform='scaleY(0)';
})
const buttonPopUp6=document.getElementById('ponudah6');
const popUp6=document.getElementById('popUp6');
buttonPopUp6.addEventListener('click',()=>{
    popUp.style.transform='scaleY(0)';
    popUp2.style.transform='scaleY(0)';
    popUp3.style.transform='scaleY(0)';
    popUp4.style.transform='scaleY(0)';
    popUp5.style.transform='scaleY(0)';
    popUp6.style.transform='scaleY(1)';
})
const popUpClose6=document.getElementById('popUpClose6');
popUpClose6.addEventListener('click',()=>{
    popUp6.style.transform='scaleY(0)';
})

