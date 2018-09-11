
var gcd = function (array) {
    var count = 1;
    var isPerim = true;
    for(var i = 2 ; i < 100 ; i++){
        isPerim = false;
        for(var j = 0; j < array.length ; j++){
            if(i % array[j] != 0){
                isPerim = true;
                count;
            }
            else{
                alert('不是质数' + i)
                isPerim = false;
                break;
            }
        }
        if(isPerim){
            array[count] = i;
            alert('是质数' + i)
            count++;
        }
    }
    return array;
}


var label = document.getElementById("show");
var nums = [2];
var str = '100以内的质数： ';
gcd(nums);
for(item in nums){
    str += item + ' ';
}



