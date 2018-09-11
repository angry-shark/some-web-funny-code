var trainSpeed = 35;
var trainPosition = 0;
var animation;

var train = document.getElementById('train');
train.addEventListener("click", speedUp);

var stopButton = document.getElementById('stopButton');
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if(trainSpeed > 10){
        trainPosition -= 10;
    }

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if(currentPosition === 600){
        alert('Crash');
        console.log("Crash!");
        clearInterval(animation);
        
    }
}

function stopTrain() {
    if(trainPosition < 600){
        clearInterval(animation);
    }
}