var myImg = document.querySelector('img');

myImg.onclick = function(){
    var mysrc = myImg.getAttribute('src');
    if(mysrc === '../img/bg00.jpg'){
        myImg.setAttribute('src','../img/bg01.jpg');
    }
    else{
        myImg.setAttribute('src','../img/bg00.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
setUserName();
}