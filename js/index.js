// Your code goes here
const navBrand = document.querySelector(".main-navigation h1");             //1
const navLinks = document.querySelector(".main-navigation a");              //2
const busImg = document.querySelector(".intro img");                        //3
const letsGoTitle = document.querySelector(".text-content h2");             //4
const letsGoBody = document.querySelector(".content-section p");            //5
const advAwaitsTitle = document.querySelector(".inverse-content h2") ;      //6
const advAwaitsImg = document.querySelector(".img-content img");            //7
const pickDestinTitle = document.querySelector(".content-destination h2")   //8
const destinChoices = document.querySelector(".content-pick h4")            //9



//1 dbl click on bus image to change to lmabda cat logo
busImg.addEventListener("dblclick", () => {
    busImg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
});

//2 mouse over to change bus image back from lambda cat logo
busImg.addEventListener("mouseover", () => {
    busImg.src = '../img/fun-bus.jpg'
});

//3 mouse enter changes "fun in the sun" title to dark red
destinChoices.addEventListener("mouseenter", () => {
    destinChoices.style.color = 'darkred'
});

//4 mouse leave changes "fun in the sun" title back to black
destinChoices.addEventListener("mouseleave", () => {
    destinChoices.style.color = 'black'
});

//5 mouse down on fun bus brand increase font size 6times
navBrand.addEventListener("mousedown", () => {
    navBrand.style.fontSize = '600%'
});

//6 mouse up on fun bus brand decreases size from 6 times to 4 times
navBrand.addEventListener("mouseup", () => {
    navBrand.style.fontSize = '400%'
});

//7 drag event changes lets go section body text to red
letsGoBody.addEventListener("drag", () => {
    letsGoBody.style.color = "crimson"
});

//8 drag end event changes lets go section body text back to black
letsGoBody.addEventListener("dragend", () => {
    letsGoBody.style.color = "black"
});

//9 mouse out event changes "Lets go" title text dark green
letsGoTitle.addEventListener("mouseout", () => {
    letsGoTitle.style.backgroundColor = 'darkgreen'
});

//10 propgation effect stop and changes "Adventure awaits" title to yellow
advAwaitsTitle.addEventListener("click", (e) => {
    advAwaitsTitle.style.color = 'yellow'
    advAwaitsTitle.classList.toggle('change')
    e.stopPropagation()
});

//prevent default
navLinks.addEventListener("click", (e) => {
    e.preventDefault();
})