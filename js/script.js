let image = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
let element = document.getElementsByClassName("element");
let main = document.getElementById("main-content");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let index = 3;
let animation = document.getElementsByClassName("animation-container");
let firstContainer = true;


main.style.backgroundImage = `url(${image[3]})`
element[3].classList.add("active");
element[0].addEventListener("click", () => {animateDisappear(); main.style.backgroundImage = `url(${image[0]})`; element[index].classList.remove("active"); index = 0; element[index].classList.add("active");});
element[1].addEventListener("click", () => {animateDisappear(); main.style.backgroundImage = `url(${image[1]})`; element[index].classList.remove("active"); index = 1; element[index].classList.add("active");});
element[2].addEventListener("click", () => {animateDisappear(); main.style.backgroundImage = `url(${image[2]})`; element[index].classList.remove("active"); index = 2; element[index].classList.add("active");});
element[3].addEventListener("click", () => {animateDisappear(); main.style.backgroundImage = `url(${image[3]})`; element[index].classList.remove("active"); index = 3; element[index].classList.add("active");});
element[4].addEventListener("click", () => {animateDisappear(); main.style.backgroundImage = `url(${image[4]})`; element[index].classList.remove("active"); index = 4; element[index].classList.add("active");});
down.addEventListener("click", goUp);
up.addEventListener("click", goDown);

for(let i = 0; i < image.length; i++){
    document.querySelector(`.element:nth-child(${i+1})`).style.backgroundImage = `url(${image[i]})`;
}

function goUp(){
    if(index == element.length - 1){
        
        animateUp();
        element[index].classList.remove("active");
        index = 0;
        main.style.backgroundImage = `url(${image[index]})`;
        element[index].classList.add("active");
    }
    else{
        animateUp();
        element[index].classList.remove("active");
        index++;
        main.style.backgroundImage = `url(${image[index]})`;
        element[index].classList.add("active");
    }
}

function goDown(){
    if(index == 0){
        animateDown();
        element[index].classList.remove("active");
        index = element.length - 1;
        main.style.backgroundImage = `url(${image[index]})`;
        element[index].classList.add("active");
    }
    else{
        animateDown();
        element[index].classList.remove("active");
        index--;
        main.style.backgroundImage = `url(${image[index]})`;
        element[index].classList.add("active");
    }
}

function animateUp(){
    if(firstContainer == true){
        animation[0].style.backgroundImage = `url(${image[index]})`;
        animation[0].classList.add("animation-up");
        animation[1].classList.remove("animation-up", "animation-down");
        firstContainer = false;
    }
    else{
        animation[1].style.backgroundImage = `url(${image[index]})`;
        animation[1].classList.add("animation-up");
        animation[0].classList.remove("animation-up", "animation-down");
        firstContainer = true;
    }
}

function animateDown(){
    if(firstContainer == true){
        animation[0].style.backgroundImage = `url(${image[index]})`;
        animation[0].classList.add("animation-down");
        animation[1].classList.remove("animation-down", "animation-up", "animation-disappear");
        firstContainer = false;
    }
    else{
        animation[1].style.backgroundImage = `url(${image[index]})`;
        animation[1].classList.add("animation-down");
        animation[0].classList.remove("animation-down", "animation-up", "animation-disappear");
        firstContainer = true;
    }
}

function animateDisappear(){
    if(firstContainer == true){
        animation[0].style.backgroundImage = `url(${image[index]})`;
        animation[0].classList.add("animation-disappear");
        animation[1].classList.remove("animation-disappear", "animation-down", "animation-up");
        firstContainer = false;
    }
    else{
        animation[1].style.backgroundImage = `url(${image[index]})`;
        animation[1].classList.add("animation-disappear");
        animation[0].classList.remove("animation-disappear", "animation-down", "animation-up");
        firstContainer = true;
    }
}