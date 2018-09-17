//是否为闰年
function is_leap(year) {
    if((year % 100 != 0 && year % 4 == 0)|| year % 400 == 0){
        return 1;
    }
    else{
        return 0;
    }
}

function displayDate(paramDate) {
    /*if(paramDate instanceof Date){
        alert("param error");
    }
    else{*/
        var _eachMonthDay = [31,28 + is_leap(),31,30,31,30,31,31,30,31,30,31];
        var _weekAllday = ["日",'一','二','三','四','五','六'];


        var _year = paramDate.getFullYear();//年
        var _month = paramDate.getMonth();//月份
        var _day = paramDate.getDate();//日期
        var _weekday = paramDate.getDay();//周几？？

        alert(paramDate.toString());
    
        //当前月的第一天的信息
        var _firstday = new Date(_year,_month,1);
        var _firstweekday = _firstday.getDay();
    
        //打印当前时间
        var _titleDate = _year + "年" + (_month+1) + '月'+ _day + '日';
        document.getElementById("title").innerHTML = _titleDate;
        document.getElementById("title2").innerHTML = "星期" + _weekAllday[_weekday];
        //打印日历
        var _table = document.getElementById("table");
        var _i = _firstweekday;
        var _j = 1;
        for(; _i < 7 ; _i++,_j++){
            _table.rows.item(1).cells.item(_i).innerHTML = _j;
        }
        var _temp = _j;
        for(var _k = 0;_j <= _eachMonthDay[_month];_j++,_k++){
            _table.rows.item(parseInt((_j - _temp) / 7) + 2).cells.item(_k % 7).innerHTML = _j;
        }
    
    //}
}

var today = new Date();
var test = new Date('2018/08/05');


//Mon Sep 17 2018 23:21:09 GMT+0800 (中国标准时间)
displayDate(today);


