var count = 0;
var isclick =  [false,false,false,
                false,false,false,
                false,false,false];

var game = [0,0,0,
            0,0,0,
            0,0,0];

var stop = false;


var init = function(){
    count = 0;
    isclick =  [false,false,false,
                false,false,false,
                false,false,false];

    game = [0,0,0,
            0,0,0,
            0,0,0];

    stop = false;
    for(var i = 1 ; i < 10 ; i++){
        var ele = document.getElementById('' + i);
        ele.style.backgroundColor = 'rgba(255, 215,0, 0.3)';
    }
}

var c = function(id){
    var i = id;
    var element = document.getElementById('' + i);
    if(stop == false){
        if(isclick[id-1] == false){
            isclick[id-1] = true;
            count = count + 1;
            if( count % 2 === 0){
                element.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
                game[id-1] = (count % 2) - 1; 
            }
            else{
                element.style.backgroundColor = "rgba(0, 0, 255, 0.2)";
                game[id-1] = (count % 2); 
            }
        }
        else{
            alert("error operation");
        }
    }
    else if(stop == true){
        init();
    }
    isOver();
};

var isgamefinish = function(){
    var num = 1;
    for(var i = 0; i < game.length ; i++){
        num = num * game[i];
    }   
    return num;
}

var isOver = function () {
    if(isgamefinish() != 0){
        alert("game over! click again to restart");
        stop = true;
    }

    if(isWin() == 'a'){
        stop = true;
        alert("player a is win!!! click again to restart");
    }
    if(isWin() == 'b'){
        stop = true;
        alert("player b is win!!! click again to restart");
    }
}

var isWin = function () {
    for(var i = 0; i < 3 ; i++){
        if((game[i*3] + game[(3*i) +1] + game[(3*i)+2] == 3)||(game[i]+game[i+3]+game[i+6] == 3)){
            //alert("row win")
            return 'a';
        }
        if((game[i*3] + game[(3*i) +1] + game[(3*i)+2] == -3)||(game[i]+game[i+3]+game[i+6] == -3)){
            //alert("row win")
            return 'b';
        }
    }

    if((game[0]+game[4]+game[8] == 3)|| (game[2]+game[4]+game[6] == 3)){
        //alert("斜边win")
        return 'a';
    }

    if((game[0]+game[4]+game[8] == -3)|| (game[2]+game[4]+game[6] == -3)){
        //alert("斜边win")
        return 'b';
    }
    
}