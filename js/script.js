// -----> Main
let mainImage;
let mainTitle;
let index = 3;
let firstAnimation = true;
let interval;

let image = new Array();
setupImages();

let element = new Array();
setupElements();

setupMain();

startCarousel();
// -----> /Main


function setupElements(){
    let sideContent = document.getElementById("side-content");
    
    for(let i = 0; i < image.length; i++){

        element.push(document.createElement("div"));
        element[i].classList.add("element");
        element[i].addEventListener("click", () => {interactSide(i)})
        
        let img = document.createElement("img");
        img.src = image[i].path;

        element[i].appendChild(img);
        sideContent.appendChild(element[i]);
    }

    element[index].classList.add("active");
}

function interactSide(i){
    animateDisappear();
    element[index].classList.remove("active");
    index = i;
    element[index].classList.add("active");
    mainImage.src = image[index].path;
    mainTitle.textContent = image[index].title;
}

function setupImages(){
    image.push({title: "Spider-Man", path: "img/01.webp"});
    image.push({title: "Ratchet & Clank", path: "img/02.webp"});
    image.push({title: "Guys in tights", path: "img/03.webp"});
    image.push({title: "Cat", path: "img/04.webp"});
    image.push({title: "Heroes", path: "img/05.webp"});
}

function setupMain(){
    let main = document.getElementById("main-content");

    for(let i = 0; i < 2; i++){
        let animationContainer = document.createElement("div");
        animationContainer.classList.add("animation-container");
        let animationImage = document.createElement("img");
        animationContainer.appendChild(animationImage);
        main.appendChild(animationContainer);
    }

    for(let i = 0; i < 2; i++){
        let circle = document.createElement("i");
        if(i % 2 == 0){
            circle.classList.add("fa-solid", "fa-chevron-circle-up", "up");
            circle.addEventListener("click", goUp);
        }
        else{
            circle.classList.add("fa-solid", "fa-chevron-circle-down", "down");
            circle.addEventListener("click", goDown);
        }
        main.appendChild(circle);
    }

    mainImage = document.createElement("img");
    mainImage.src = image[index].path;
    main.appendChild(mainImage);

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    mainTitle = document.createElement("h1");
    mainTitle.textContent = image[index].title;
    titleContainer.appendChild(mainTitle);
    main.appendChild(titleContainer);
}

function animateDisappear(){

    firstImage = document.querySelector("#main-content > div:nth-child(1) img");
    secondImage = document.querySelector("#main-content > div:nth-child(2) img");

    if(firstAnimation == true){
        firstImage.src = image[index].path;
        firstImage.classList.add("animation-disappear");
        secondImage.classList.remove("animation-disappear");
        firstAnimation = false
    }
    else{
        secondImage.src = image[index].path;
        secondImage.classList.add("animation-disappear");
        firstImage.classList.remove("animation-disappear");
        firstAnimation = true;
    }
}

function goDown(){

    if(index == element.length - 1){
        animateDisappear();
        element[index].classList.remove("active");
        index = 0;
        mainImage.src = image[index].path;
        mainTitle.textContent = image[index].title;
        element[index].classList.add("active");
    }
    else{
        animateDisappear();
        element[index].classList.remove("active");
        index++;
        mainImage.src = image[index].path;
        mainTitle.textContent = image[index].title;
        element[index].classList.add("active");
    }
}

function goUp(){
    if(index == 0){
        animateDisappear();
        element[index].classList.remove("active");
        index = element.length - 1;
        mainImage.src = image[index].path;
        mainTitle.textContent = image[index].title;
        element[index].classList.add("active");
    }
    else{
        animateDisappear();
        element[index].classList.remove("active");
        index--;
        mainImage.src = image[index].path;
        mainTitle.textContent = image[index].title;
        element[index].classList.add("active");
    }
}

function startCarousel(){
    resumeCarousel();
    document.getElementsByClassName("row")[0].addEventListener("mouseover", pauseCarousel);
    document.getElementsByClassName("row")[0].addEventListener("mouseleave", resumeCarousel);
}

function pauseCarousel(){
    clearInterval(interval);
}

function resumeCarousel(){
    interval = setInterval(goDown, 5000);
}