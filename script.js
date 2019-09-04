
const container = document.querySelector('.container');
const body = document.querySelector('body');

document.addEventListener('click', buttonClick);
document.addEventListener('click', resetClick);

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

    let resetDiv = document.createElement('div');
    resetDiv.className = 'resetDiv';
    body.appendChild(resetDiv);

    let resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.id = 'resetButton';
    resetButton.innerHTML = 'RESET';
    resetDiv.appendChild(resetButton);
}
 

container.addEventListener("mouseover", function(e) {
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = "red";
    }   
})

function resetClick(e) {
    if (e.target.classList.contains('resetButton')) {
        resetTable();
    }
}

function resetTable() {
    let removeTable = document.getElementById('container');
    let removeReset = document.getElementById('resetButton'); 
    removeTable.parentNode.removeChild(removeTable);
    removeReset.parentNode.removeChild(removeReset);
    
}


