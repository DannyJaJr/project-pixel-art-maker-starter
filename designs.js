//Global variables for columns and rows
let width;
let height;


/**
 * @description: funtion to submit the form
 * form ID used to submit with eventListerner
 * and call back the makegrid()
 * @Danny
 * 
 */
function forSubmit(event) {
    makeGrid(0, 0);
    height = document.querySelector("#inputHeight").value;
    width = document.querySelector("#inputWidth").value;
    makeGrid(height, width);
    event.preventDefault();
   
}
const formTwo = document.getElementById('sizePicker');
formTwo.addEventListener('submit', forSubmit);


/**
 * funtion to create the grid
 * @param: x and y used as height and width for looping creating
 * @description: Click added to to create background because no Callback 
 * function allowed inside the grid function
 * only async await function or click function
 * @Danny
 * 
 */
function makeGrid(x, y) {
    let table = document.querySelector('table');
    let color;
    let row;
    let cell;
    // replaceChildren() to clear the table by relacing node
    // with equivalent string node, others option keeps the form blank
    table.replaceChildren();
    for (let i = 1; i <= x; i++) {
        row = document.createElement('tr');
        for (let j = 0; j <= y-1; j++) {
            cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    //function click to add color to to td or cell
    $('td').click(function addColor(event) {
        color = $('#colorPicker').val();
        $(event.target).css('background-color', color)
    });  
}
