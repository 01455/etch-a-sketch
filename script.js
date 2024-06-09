const containerDiv = document.querySelector('#container')
const gridBtn = document.createElement('button')
gridBtn.innerText = 'Set number of squares per side (reset)'
gridBtn.classList.add('btn')
containerDiv.insertAdjacentElement('beforebegin', gridBtn)
const trailSelect = document.querySelector('#trail-select')
let userTrailChoice = ''

function createDivs(num) {
    
    const divSize = containerDiv.clientHeight / num

    // console.log(`Calculated div size: ${divSize}px`);

    containerDiv.innerHTML = '';

    for (let totalDivs = 1; totalDivs <= num * num; totalDivs++) {
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        div.style.width = `${divSize}px`
        div.style.height = `${divSize}px`
        containerDiv.appendChild(div);
        // console.log(`appended div nr ${totalDivs}`);
    }
}


function addListeners() {
    const gridDivElements = document.querySelectorAll('.gridDiv')
    for (let divElement of gridDivElements) {
        divElement.addEventListener('mouseover', (e) => {
            if (userTrailChoice == 'black') {
                e.currentTarget.style.backgroundColor = 'black'
            }
            if (userTrailChoice == 'rgb') {
                e.currentTarget.style.backgroundColor = randomRgbColor()
            }
            if (userTrailChoice == '') {
                trailSelect.showPicker()
            }
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

trailSelect.addEventListener('click', function() {
    if (this.value == 'black') {
        userTrailChoice = 'black'
    }
    if (this.value == 'rgb') {
        userTrailChoice = 'rgb'
    }
})


const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};  