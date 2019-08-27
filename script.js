
const btn = document.getElementById('btn');

btn.addEventListener('click', generateTable);

function generateTable() {
     
    let value = 20;
    let container = document.querySelector('.container');

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

}

    // STRUGGLING WITH THIS NEXT BIT - MOUSEOVERS!

document.addEventListener('mouseover', EnterCell);

function EnterCell(hover) {

    const cell = document.getElementsByClassName('cell');

    if(hover.target.classList.contains("cell")) {

    cell.style.backgroundColor = "red";

    }
};
