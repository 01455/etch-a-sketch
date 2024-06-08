const containerDiv = document.querySelector('#container')
const gridBtn = document.createElement('button')
gridBtn.innerText = 'Set number of squares per side'
gridBtn.classList.add('btn')
containerDiv.insertAdjacentElement('beforebegin', gridBtn)

function createDivs(num) {
    
    const divSize = containerDiv.clientHeight / num

    console.log(`Calculated div size: ${divSize}px`);

    containerDiv.innerHTML = '';

    for (let totalDivs = 1; totalDivs <= num * num; totalDivs++) {
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        div.style.width = `${divSize}px`
        div.style.height = `${divSize}px`
        containerDiv.appendChild(div);
        console.log(`appended div nr ${totalDivs}`);
    }
}

function addListeners() {
    const gridDivElements = document.querySelectorAll('.gridDiv')
    for (divElement of gridDivElements) {
        divElement.addEventListener('mouseover', (e) => {
            e.currentTarget.style.backgroundColor = 'black';
        })
    }
}

gridBtn.addEventListener('click', () => {
    let userNum = +prompt('Enter the number of squares you wish to have per side (max 100)', 16)
    if (typeof userNum == 'number' && userNum <= 100) {
        createDivs(userNum)
        addListeners()
    }
})