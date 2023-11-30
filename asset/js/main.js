
const navbar = document.querySelector(".navbar")
const navLinks = document.querySelectorAll('.nav-link')

const header = document.querySelector('.header h6')
const headerContent = document.querySelector('header .header-content h2')


const loader = document.querySelector('.loading')
const second = document.querySelector('.second')
const scrollUp = document.querySelector('.scroll-up')
const Top = document.querySelector('.to-top')

//navbar
window.addEventListener('scroll', function(){
    if(window.scrollY >= header.offsetTop )
    navbar.style.cssText = `
    background-color : #fff `;
    else
    {
        navbar.style.cssText = `
    background-color : transparent `;
    }
})

window.addEventListener('scroll', function(){
    if(window.scrollY >= headerContent.offsetTop )
    navbar.style.cssText = `
    background-color : #fff `;
    else
    {
        navbar.style.cssText = `
    background-color : transparent `;
    }
})


//loading
window.addEventListener('load', function(){
    setTimeout(function(){
        loader.classList.add('opacity-0', 'invisible')
        document.body.classList.add('overflow-auto')
    },2000)
})

//scroll-up
window.addEventListener('scroll', function(){
    if(window.scrollY > second.offsetTop ){
        scrollUp.classList.remove('opacity-0', 'invisible')
    }
    else{
        scrollUp.classList.add('opacity-0', 'invisible')
        
    }
})

scrollUp.addEventListener('click', function(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})



Top.addEventListener('click', function(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})





// CountDown Timer
let countDownDate = new Date("Dec 13, 2024 23:59:59").getTime();

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
    
    document.getElementById('days').innerHTML= days;
    document.getElementById('hours').innerHTML= hours <10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerHTML= minutes <10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerHTML= seconds <10 ? `0${seconds}` : seconds;


    if(dateDiff <0){
        clearInterval(counter);
    }
}, 1000);




//Rating Star
const starContainers = document.querySelectorAll(".ratings");

starContainers.forEach((container) => {
const stars = container.querySelectorAll(".star i");

stars.forEach((star, index) => {
star.addEventListener("click", () => {
    // Reset the rating to zero.
    stars.forEach((s, i) => {
    if (i <= index) {
        s.classList.add("active");
    } else {
        s.classList.remove("active");
    }
    });

    // Update the rating message.
    const rating = index + 1;
    ratingMessage.textContent = `You rated this item ${rating} star(s).`;
});
});
});



//initialising a variable name data
let data = 0;

//printing default value of data 
document.getElementById("counting").innerHTML = data;

//creation of increment function
function increment() {
data = data + 1;
document.getElementById("counting").innerHTML = data;
}
//creation of decrement function
function decrement() {
data = data - 1;
document.getElementById("counting").innerHTML = data;
}


let foody = document.querySelector('.foody')
function changeBackground(imageUrl) {
    foody.src = `url('${imageUrl}')`;
}

