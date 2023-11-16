const mainContainer =document.querySelector('#main-container');
const btn = document.createElement('button');
btn.textContent = "Squares"

const bodyTag = document.querySelector('body');
bodyTag.insertBefore(btn, mainContainer)


createGrid = () => {
    mainContainer.setAttribute('style', `grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);`);
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "containers");
        div.addEventListener('mouseover', function(event){
            const color = randomColor();
            event.target.style.backgroundColor = color;
        })
        div.addEventListener('mouseout', function(event){
            const color = randomColor();
            event.target.style.backgroundColor = color;
        })
        mainContainer.appendChild(div); 
    }
}

function createDivs(num){
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${num}, 2fr); grid-template-rows: repeat(${num}, 2fr);`);
    for (let i = 1; i <= (num*num); i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "containers");

        div.addEventListener('mouseover', function(event){
            const color = randomColor();
            event.target.style.backgroundColor = color;
        })
        div.addEventListener('mouseout', function(event){
            const color = randomColor();
            event.target.style.backgroundColor = color;
        })
        mainContainer.appendChild(div);
} }

btn.addEventListener('click', () => {
    let num = window.prompt('How many squares per row and column?');
    if (parseInt(num) != NaN && num > 0 && num <= 100) {
        mainContainer.replaceChildren();
        createDivs(num)
    } else {
        window.alert('Input must be a number, greater than 0 and below 100')
    }
})

function randomColor() {
    const colorVal = 'ABCDEF0123456789'
    let rndColor = '#'
    for (let i=0; i < 6; i++)
        rndColor += colorVal[Math.round(Math.random()*15)]
    return rndColor
}   





createGrid()
