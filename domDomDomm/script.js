let button = document.createElement("button");
// let btnText = document.createTextNode("Add Square");
// button.appendChild(btnText);
button.textContent = "Add Square";
document.body.appendChild(button);

button.addEventListener("click", function(){
    let square = document.createElement('div');
    let squareContainer = document.createElement('div');
    document.body.appendChild(squareContainer);
    square.className = 'square';

    square.style.border = '1px solid black';
    square.style.background = 'black';
    square.style.width = '3em';
    square.style.height = '3em';
    squareContainer.appendChild(square);
    document.body.appendChild(square);
});
