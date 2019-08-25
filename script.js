
let value = 3;

function generateTable(value){
     
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