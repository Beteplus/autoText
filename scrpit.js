const container = document.querySelector(".container")

const careers = ["web dev","fullStack Dev", "Frontend Dev", "BackEnd Dev", "React Dev", "Mern Dev"]

let careerIndex = 0;

let characterIndex = 0;

updatetext()

function updatetext(){
    container.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++
    if (characterIndex === careers[careerIndex].length){
        careers++
        characterIndex = 0
    }
    setTimeout(updatetext, 1000)
}
