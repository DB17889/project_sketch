
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
    
    container.addEventListener("mouseover", function(e) {

        if(e.target.classList.contains('cell')){

        e.target.style.backgroundColor = "red";}   
        

    })

}
