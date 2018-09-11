var item1;
var item2;
var item3;

function newList(){
    item1 = prompt("1");
    item2 = prompt("2");
    item3 = prompt("3");
    updateList();
}

function updateList(){
    document.getElementById("first").innerHTML = item1;
    document.getElementById("second").innerHTML = item2;
    document.getElementById("third").innerHTML = item3;
}
