
const container = document.querySelector('.container');
const body = document.querySelector('body');
const bodyContainer = document.querySelector('.bodyContainer');
let buttonDiv = document.getElementById('buttons');

document.addEventListener('click', buttonClick);
document.addEventListener('click', resetClick);


function buttonClick(e) {
    if (e.target.classList.contains('btn')) {
        let value = e.target.value;
        generateTable(value);
    }
}

function generateTable(value) {

    let containerWidth = value * 12;                    
    let containerHeight = value * 11;             

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

    buttonDiv.parentNode.removeChild(buttonDiv);

    createElements();
}
 
function createElements() {

    let colorDiv = document.createElement('div');
    colorDiv.className = 'colorDiv';
    colorDiv.id = 'colorDiv';
    body.appendChild(colorDiv);

    let colorBlue = document.createElement('button');
    colorBlue.className = 'colorBtn';
    colorBlue.value = 'blue';
    colorBlue.style.backgroundColor = 'blue';
    colorDiv.appendChild(colorBlue);

    let colorRed = document.createElement('button');
    colorRed.className = 'colorBtn';
    colorRed.value = 'red';
    colorRed.style.backgroundColor = 'red';
    colorDiv.appendChild(colorRed);

    let colorGreen = document.createElement('button');
    colorGreen.className = 'colorBtn';
    colorGreen.value = 'green';
    colorGreen.style.backgroundColor = 'green';
    colorDiv.appendChild(colorGreen);

    let colorYellow = document.createElement('button');
    colorYellow.className = 'colorBtn';
    colorYellow.value = 'yellow';
    colorYellow.style.backgroundColor = 'yellow';
    colorDiv.appendChild(colorYellow);
    
    let resetDiv = document.createElement('div');
    resetDiv.className = 'resetDiv';
    body.appendChild(resetDiv);

    let resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.id = 'resetButton';
    resetButton.innerHTML = 'RESET';
    resetDiv.appendChild(resetButton);

}


let selectedColor = 'white';

document.addEventListener('click', colorClick);

function colorClick(e) {    
    if (e.target.classList.contains('colorBtn')) {  
        selectedColor = e.target.value;
        console.log('logged: ' + selectedColor);    
    }
    switch (selectedColor) {
        case 'blue':
            container.addEventListener("mouseover", function(e) {
                if(e.target.classList.contains('cell')){
                    e.target.style.backgroundColor = "blue";
                }   
            })
            break;
        case 'red':
            container.addEventListener("mouseover", function(e) {
                if(e.target.classList.contains('cell')){
                    e.target.style.backgroundColor = "red";
                }   
            })
            break;
        case 'yellow':
                container.addEventListener("mouseover", function(e) {
                    if(e.target.classList.contains('cell')){
                        e.target.style.backgroundColor = "yellow";
                    }   
                })
                break;
        case 'green':
                container.addEventListener("mouseover", function(e) {
                    if(e.target.classList.contains('cell')){
                        e.target.style.backgroundColor = "green";
                    }   
                })
                break;
        default:
                container.addEventListener("mouseover", function(e) {
                    if(e.target.classList.contains('cell')){
                        e.target.style.backgroundColor = "white";
                    }   
                })
    }
}


/*
container.addEventListener("mouseover", function(e) {
    if(e.target.classList.contains('cell')){
        e.target.style.backgroundColor = "red";
    }   
})
*/

function resetClick(e) {
    if (e.target.classList.contains('resetButton')) {
        location.reload(true);
    }
}




