let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainer = document.getElementById("bgContainer")

function clickButton() {
    let numberOfBgColors = bgColorsArray.length;
    let randomColorIndex = Math.ceil(Math.random() * numberOfBgColors);

    if (randomColorIndex === numberOfBgColors) {
        randomColorIndex = numberOfBgColors - 1
    }
    let randomBgColor = bgColorsArray[randomColorIndex];
    bgContainer.style.backgroundColor = randomBgColor
}