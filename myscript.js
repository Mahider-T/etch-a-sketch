const body = document.querySelector('body');

body.style.display = "flex";
body.style.height = "100vh"; //to center the container div on the screen
body.style.justifyContent = "center";//to center the container div on the screen
body.style.alignItems = "center";//to center the container div on the screen

const container = document.createElement('div');
container.classList.add('container');
container.style.display = "flex";
container.style.flex = "1";
container.style.flexWrap = "wrap";
container.style.maxWidth = "900px"; //limit max width to limit only certain amount of squares on a row

let divs; //a new mini-square box is saved here, updated throughout the loop
for (let i = 1; i <= 16 * 16; i++) {
    divs = document.createElement('div');
    divs.classList.add(`box${i}`); //to give each box different className
    divs.style.height = "50px";
    divs.style.width = "50px";
    divs.style.border = "solid black 2px";
    container.appendChild(divs);
}

body.appendChild(container);

const boxes = document.querySelectorAll(`.container div`); //access the div inside "container" class using child selector
boxes.forEach(element => {addEventListener('mouseover', function(e){
    if (e.target.className == element.className ) {
            element.style.border = "solid red 2px";
            element.style.backgroundColor = "red";
          
        //console.log(e.target.className);
    }
    

}, true)
    
});



