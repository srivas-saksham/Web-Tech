// DOM
const text = document.querySelector('h3');
const body = document.querySelector('body');

function mouseOver(){
    text.innerText = 'Mouse is Over Right Now!';
    body.style.backgroundColor = 'pink';
}
function mouseOut(){
    text.innerText = 'Mouse is Went Out!';
    body.style.backgroundColor = 'lightgreen';
}
function mouseClick(){
    text.innerText = 'YOU CLICKED!!!';
    body.style.backgroundColor = 'cyan';
}
