const body = document.querySelector('body');

const buttonContainer = document.createElement('div');//A container to hold the button
buttonContainer.classList.add = "buttonContainer";
buttonContainer.style.minWidth = "100vw"; //so that the button always is on top of the drawing board and not to the side 
buttonContainer.style.minHeight = "fit-content";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.alignItems = "center";

const button = document.createElement('button');//creates the button that prompts the number of boxes per row
button.innerText = "How many boxes per row?";
button.style.fontFamily = "Times New Roman";
button.style.fontWeight = "bold";
button.style.fontSize = "25px";
button.style.color = "black";
button.style.backgroundColor = "coral";
button.style.width = "300px";
button.style.height = "50px";
button.style.borderRadius = "9px";
buttonContainer.appendChild(button); //add the polished button into the container

body.style.display = "flex";
body.style.height = "100vh"; //to center the container div on the screen
body.style.backgroundColor = "bisque";
body.style.justifyContent = "center";//to center the container div on the screen
body.style.alignItems = "center";//to center the container div on the screen
body.style.flexWrap = "wrap";
body.appendChild(buttonContainer);


const container = document.createElement('div');
let containerDimension = 700;//container should not grow or shrink depending on the number of boxes

container.classList.add('container');
container.style.display = "flex";
container.style.flex = "1 1 auto";
container.style.flexWrap = "wrap";
container.style.maxHeight = `${containerDimension}px`;
container.style.maxWidth = `${containerDimension}px`; 
container.style.minWidth = `${containerDimension}px`;

// changes the background color and border of each div to red when it is hovered over
//takes a nodelist as a parameter (the result of querySelectorAll() function)
function drawOnHover(boxes) {
    boxes.forEach(element => {
        addEventListener('mouseover', function (e) {
            if (e.target.className == element.className) { //the box being hovered over == the box reached after iteration
                element.style.border = `solid red 1px`;
                element.style.backgroundColor = "red";
                //console.log(e.target.className);
            }
        }, true)
    })
}

//The function below draws the pad to be sketched over
let divs; //a new mini-square box is saved here, updated throughout the loop
function drawPad(boxPerRow){
    let boxDimension = containerDimension/boxPerRow;
    for (let i = 1; i <= boxPerRow * boxPerRow; i++) {
        divs = document.createElement('div');
        divs.classList.add(`box${i}`); //to give each box different className
        divs.style.boxSizing = "border-box";
        divs.style.height = `${boxDimension}px`;
        divs.style.width = `${boxDimension}px`;
        divs.style.border = `solid black 1px`;
        container.appendChild(divs);//each div(box) is appended to the container after each iteration 
    }
    body.appendChild(container);

}

let initialNumberOfBoxesPerRow = 10;
drawPad(initialNumberOfBoxesPerRow);
const initialBoxes = document.querySelectorAll(`.container div`);
drawOnHover(initialBoxes);

button.addEventListener('click', () => {
    numberOfBoxesPerRow = prompt("How many boxes in a row?");
    while(!(numberOfBoxesPerRow > 0 && numberOfBoxesPerRow < 100)){//restrict entry between 1 - 100
        alert("Only numbers 1 - 99 are allowed.");
        numberOfBoxesPerRow = prompt("How many boxes in a row?");
    }

    if (numberOfBoxesPerRow > 0 && numberOfBoxesPerRow < 100) {
        //document.body.removeChild(container);
        //container.textContent = "";
        // container.removeChild(container.lastChild);
        while (container.firstChild) {// remove prior boxes
            container.removeChild(container.firstChild);
        }
        drawPad(numberOfBoxesPerRow); 
        const newBoxes = document.querySelectorAll(`.container div`)
        drawOnHover(newBoxes);
    }
})








