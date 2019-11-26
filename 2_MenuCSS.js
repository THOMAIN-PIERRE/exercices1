/*let menu = document.querySelectorAll("a");
console.log(menu);*/

let auclicAlpha = document.getElementById("Alpha");
let sousmenu = function apparition() {
    document.getElementById("sousmenuAlpha").style.visibility = "visible"
}
auclicAlpha.addEventListener("click", sousmenu)
let enpartantAlpha = function () {
    document.getElementById("sousmenuAlpha").style.visibility = "hidden"
}
auclicAlpha.onmouseleave = enpartantAlpha


let auclicBeta = document.getElementById("Beta");
let sousmenuBeta = function apparition() {
    document.getElementById("sousmenuBeta").style.visibility = "visible"
}
auclicBeta.addEventListener("click", sousmenuBeta)
let enpartantBeta = function () {
    document.getElementById("sousmenuBeta").style.visibility = "hidden"
}
auclicBeta.onmouseleave = enpartantBeta


let auclicKappa = document.getElementById("Kappa");
let sousmenuKappa = function apparition() {
    document.getElementById("sousmenuKappa").style.visibility = "visible"
}
auclicKappa.addEventListener("click", sousmenuKappa)
let enpartantKappa = function () {
    document.getElementById("sousmenuKappa").style.visibility = "hidden"
}
auclicKappa.onmouseleave = enpartantKappa


let auclicZeta = document.getElementById("Zeta");
let sousmenuZeta = function apparition() {
    document.getElementById("sousmenuZeta").style.visibility = "visible"
}
auclicZeta.addEventListener("click", sousmenuZeta)
let enpartantZeta = function () {
    document.getElementById("sousmenuZeta").style.visibility = "hidden"
}
auclicZeta.onmouseleave = enpartantZeta



