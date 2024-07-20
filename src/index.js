let btn = document.getElementById("btn");
const bodyElement = document.getElementsByTagName("body")[0];
const colors = document.getElementById("colors");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

btn.addEventListener("click", () => {
    const color = `RGB(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
    console.log(color);
    colors.innerHTML += `<p>${color},</p>`;
    bodyElement.style.backgroundColor = color;
})