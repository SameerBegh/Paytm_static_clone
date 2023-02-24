// Sign Form
const Sign = document.getElementById("sign");
const List = document.getElementById("getform");
getform.style.display = "none";

Sign.addEventListener("click", (event) =>{
        if(  getform.style.display == "none"){
                 getform.style.display = "flex"
         } else{
                 getform.style.display = "none"
                }
    })
    //   For Close-button    

document.getElementById("close-btn").addEventListener("click", function(){
document.getElementById("getform").style.display="none" ;          
 })          
        
//  slide
let slidePosition = 0;
const slides = document.getElementsByClassName("list-box");
const totalSlides = slides.length;
firstImg = list-box.querySelectorAll("img")[0];
let firstImgWidth = firstImg.clientWidth + 36;

document.getElementById("carousel-btn-pre")
.addEventListener("click" , function() {

movepre();

})

document.getElementById("carousel-btn-nxt")
.addEventListener("click" , function() {
        movenxt();
 }) 


function movepre(){
  slides.scrollLeft -= firstImgWidth;
}
function movenxt(){
  slides.scrollLeft += firstImgWidth;
}