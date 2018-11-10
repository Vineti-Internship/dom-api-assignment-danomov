let count = 0;
let angle = 46;
let interval, interval1;

//Creates start button.
function myFunction1(){
let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerHTML = "Start";
btn.addEventListener('click', myFunction6);
btn.style.height = "30px";
btn.style.width = "100px";
btn.style.color = "white";
btn.style.backgroundColor = "black";
btn.style.border = "1px solid grey";
btn.style.borderRadius = "50px";
}

//Creates stop button.
function myFunction2(){
let btn1 = document.createElement('button');
document.body.appendChild(btn1);
btn1.innerHTML = "Stop";
btn1.addEventListener('click', myFunction8);
btn1.style.height = "30px";
btn1.style.width = "100px";
btn1.style.color = "white";
btn1.style.backgroundColor = "black";
btn1.style.border = "1px solid grey";
btn1.style.borderRadius = "50px";
}

//Creates big circle.
function myFunction3(){
let bigcircle = document.createElement('div')
document.body.appendChild(bigcircle);
bigcircle.id = "bigcircle";
bigcircle.style.width = "300px";
bigcircle.style.height = "300px";
bigcircle.style.backgroundColor = "#a2ab58";
bigcircle.style.borderRadius = "300px";
bigcircle.style.position = 'absolute';
bigcircle.style.top = "200px";
bigcircle.style.left = "500px";
}

//Creates small circle.
function myFunction4(){
let tinycircle = document.createElement('div');
document.body.appendChild(tinycircle);
tinycircle.id = "tinycircle";
tinycircle.style.width = "75px";
tinycircle.style.height = "75px";
tinycircle.style.backgroundColor = "#636363";
tinycircle.style.borderRadius = "75px";
tinycircle.style.position = 'absolute';
tinycircle.style.top = "312.5px";
tinycircle.style.left = "762.5px";
}

//Does the math for changing small circle's coordinates.
function myFunction5(){
    let top = parseInt(tinycircle.style.top);
    let left = parseInt(tinycircle.style.left);
    top = top + Math.sin(angle)*138;
    left = left + Math.cos(angle)*138;
    tinycircle.style.top = top + "px";
    tinycircle.style.left = left + "px"; 
    angle++;
}

//This function is for not letting the small circle go out of big circle's orbit.
function myFunction7(){
    tinycircle.style.top = "312.5px";
    tinycircle.style.left = "762.5px";
    angle = 46;
}

//Starts rotating small circle after start button click.
function myFunction6(){
    if(count !== 1) {
    interval = setInterval(myFunction5, 100);
    interval1 = setInterval(myFunction7, 550);
    count = 1;
    }
}
  
//Stops rotating small circle after stop button click
function myFunction8(){
    if(count !== 0){
    clearInterval(interval);
    clearInterval(interval1);
    count = 0;
    }
}

//When the page loads runs this functions for creating circles and the button.
function myFunction(){
    myFunction1();
    myFunction2();
    myFunction3();
    myFunction4();
}
    