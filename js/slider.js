const refs = {
    changeBgcBtnBack: document.querySelector(".js-back"),
    changeBgcBtnForward: document.querySelector(".js-forward"),
    heroSection: document.querySelector(".hero-content"),
}

refs.changeBgcBtnBack.addEventListener("click", onChangeBgcBtn);

function onChangeBgcBtn (e) {
    console.log(e.currentTarget)
   refs.heroSection.style.backgroundImage = "url(../images/background-img/new.jpg)"
}