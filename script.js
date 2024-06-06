const containerDiv = document.querySelector('#container')

function createDivs(num) {
    let total = num * num;
    containerDiv.style.width = `${total}px`;
    containerDiv.style.height = `${total}px`;
    for (let totalDivs = 1; totalDivs <= total; totalDivs++) {
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        div.style.border = '1px solid gray';
        div.style.boxSizing = 'border-box';
        div.style.setProperty('width', `calc(100% / ${num})`);
        div.style.setProperty('height', `calc(100% / ${num})`);
        containerDiv.appendChild(div);
        console.log(`appended div nr ${totalDivs}`);
    }
    return
}