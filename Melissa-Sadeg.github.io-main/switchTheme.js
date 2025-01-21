const theme1Button = document.querySelector("#theme1-button")
const theme2Button = document.querySelector("#theme2-button")
const theme3Button = document.querySelector("#theme3-button")
const toggleButton = document.querySelector("#toggle-button")

const bodyElement = document.querySelector("body")


theme1Button.addEventListener("click", switchTheme)

theme2Button.addEventListener("click", switchTheme)

theme3Button.addEventListener("click", switchTheme)


function switchTheme(e) {
    if (e.target.id == "theme1-button") {
        toggleButton.style.setProperty("transform", "translateX(0)");
        bodyElement.classList = "theme1"
    }
    else if (e.target.id == "theme2-button") {
        toggleButton.style.setProperty("transform", "translateX(0.6rem)");
        bodyElement.classList = "theme2"
    }
    else if (e.target.id == "theme3-button") {
        toggleButton.style.setProperty("transform", "translateX(1.25rem)");
        bodyElement.classList = "theme3"
    }
}
