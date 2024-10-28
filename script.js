let box0 = document.getElementById('box0');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let button = document.querySelector('button');

function changeColor(color) {
    if (box0) {
        box0.style.background = color;
    }
}

if (box1) {
    box1.onclick = function () {
        changeColor('black');
        box0.style.borderColor = "black";
    };
}

if (box2) {
    box2.onclick = function () {
        changeColor('green');
        box0.style.borderColor = "green";
    };
}

if(box3) {
box3.onclick = function() {
changeColor("yellow");
box0.style.borderColor = "yellow";
}
}

if(box4){
box4.onclick = function(){
changeColor("white")
box0.style.borderColor = "white";
}
}

if(box5){
box5.onclick = function() 
{
    changeColor('blue')
    box0.style.borderColor = "blue";
}

}

if(box6) {
    box6.onclick = function(){
changeColor("red")
box0.style.borderColor = "red";

    }

}

box0.onclick = function fullscreen() {
    box0.requestFullscreen();
}

