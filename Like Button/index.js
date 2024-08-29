let main = document.querySelector("main")
let divs = document.querySelectorAll("div")
let singleClick = () => {
    console.log(divs);
    divs[0].style.background = "red"
    divs[1].style.background = "red"
    divs[0].style.border = "none"
    divs[1].style.border = "none"
}
let dbClick = () => {
    console.log(divs);
    divs[0].style.background = "white"
    divs[1].style.background = "white"
    divs[0].style.border = "2px solid "
    divs[1].style.border = "2px solid"
}
main.onclick = singleClick
main.ondblclick = dbClick