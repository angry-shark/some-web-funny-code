var D = new Date();
var weeks = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
var dateEle = document.getElementById('date');
var Things = document.getElementById('Things');

displayDate();


function displayDate() {
    dateEle.innerHTML = weeks[D.getDay()] + ' ' + months[D.getMonth()] + ' ' + D.getDate() + ' ' +D.getFullYear();
}

function showThingsToDo() {
    var str = ' ';
    switch(D.getDay()){
        case 0: str += 'Sunday = funday';
            break;
        case 1: str += 'Should go to class,Monday'
            break;
        case 2: str += 'Need to eat,Thuesday'
            break;
        case 3: str += 'play the phone,Wed'
            break;
        case 4: str += 'play basketball'
            break;
        case 5: str += 'last class,friday'
            break;
        case 6: str += 'play LoL,Sat'
            break;
        default:break;
    }
    Things.innerHTML = str;
}