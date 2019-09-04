
const container = document.querySelector('.container');

document.addEventListener('click', buttonClick);

function buttonClick(e) {
    if (e.target.classList.contains('btn')) {
        let value = e.target.value;
        generateTable(value);
    }
}

function generateTable(value) {

    let containerWidth = value * 12;                    // move to start?
    let containerHeight = value * 11;             // move to start?

    for (let i = 0; i < value; i++){
        let row = document.createElement('div');
        row.className = 'row';
            for (let x = 1; x <= value; x++){
                let cell = document.createElement('div');
                cell.className = 'cell';
                row.appendChild(cell);
                container.appendChild(row);
            }

    }

    container.style.border = 'solid black 3px';
    container.style.height = containerHeight + 'px';
    container.style.width = containerWidth + 'px';
    let buttonDiv = document.getElementById('buttons');
    buttonDiv.parentNode.removeChild(buttonDiv);
}
    
container.addEventListener("mouseover", function(e) {
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = "red";
    }   
})


