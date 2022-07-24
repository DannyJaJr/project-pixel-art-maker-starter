let height;
let width;
let color;


// document.querySelector('#sizePicker').submit(function (event) {
//     event.preventDefault();
//     height = document.querySelector('#inputHeight').value;
//     width = document.querySelector('#inputWidth').value;
//     makeGrid(height, width);
//     console.log('heigh is: ' + height + " and  the width: " + width)
// })
function forSubmit(event) {
    makeGrid(0, 0)
    height = document.querySelector("#inputHeight").value;
    width = document.querySelector("#inputWidth").value;
    makeGrid(height, width)
    event.preventDefault();
   
}
const formTwo = document.getElementById('sizePicker');
formTwo.addEventListener('submit', forSubmit);


// add parameter to call the grid function
function makeGrid(x, y) {
    document.querySelector('tr').remove();

    for (let i = 1; i <= x; i++) {
        document.createElement('#pixelCanvas').insertAdjacentHTML("beforeend",'<tr id=table' + i + '></tr>');
        for (let j = 1; j <= y; j++) {
            document.createElement('#table' + i).insertAdjacentHTML("beforeend",'<td></td>');
            console.log("hello world " + i + j)
           
        }
    }


    document.querySelector('td').click(function addColor() {
        color = document.querySelector('#colorPicker').value;

        if (document.querySelector(this).attr('style')) {
            document.querySelector(this).removeAttr('style');
            console.log("remove 1")
            
        } else {
            document.querySelector(this).attr('style', 'background-color:' + color);
            console.log("hello world else")
        }
    });
}