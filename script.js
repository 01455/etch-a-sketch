const containerDiv = document.querySelector('#container')

function createDivs(num) {
    const divSize = containerDiv.clientHeight / num
    console.log(divSize)
    for (let totalDivs = 1; totalDivs <= num * num; totalDivs++) {
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        div.style.width = `${divSize}px`
        div.style.height = `${divSize}px`
        containerDiv.appendChild(div);
        console.log(`appended div nr ${totalDivs}`);
    }
    return
}