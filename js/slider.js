const images = [];

images[0] =  "url(../images/background-img/slider-img-1.jpg)";
images[1] = "url(../images/background-img/slider-img-2.jpg)";
images[2] = "url(../images/background-img/slider-img-3.jpg)";



const refs = {
    changeBgcBtnBack: document.querySelector(".js-back"),
    changeBgcBtnForward: document.querySelector(".js-forward"),
    heroSection: document.querySelector(".hero-content"),
}

refs.changeBgcBtnForward.addEventListener("click", onChangeBgcBtnForward);
refs.changeBgcBtnBack.addEventListener('click', onChangeBgcBtnBack);

let i = 0;

function onChangeBgcBtnForward () {
       if( i >= images.length-1 ) i = -1;
        i++;
        return setBgImg();
}

function onChangeBgcBtnBack () {
    if (i <= 0) i = images.length;
      i--
    return setBgImg();
}

function setBgImg() {
    return refs.heroSection.style.backgroundImage = images[i];
}