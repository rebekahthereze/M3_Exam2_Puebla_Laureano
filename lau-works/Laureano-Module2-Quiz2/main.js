let calculate = document.getElementById('calculate');
let calCount1 = document.getElementById('calCount-id');
var cal = 0;

calculate.onclick = function() {
    if (document.getElementById('gender').value == "1") {
        var BMR = (10 * document.getElementById('weight').value) + (6.25 * document.getElementById('height').value) - (5 * document.getElementById('age').value) + 5;
    } else if (document.getElementById('gender').value == "2") {
        var BMR = (10 * document.getElementById('weight').value) + (6.25 * document.getElementById('height').value) - (5 * document.getElementById('age').value) - 161;
    } 

    if (activity.value == "1") {
        cal = BMR;
    } else if (document.getElementById('activity').value == "2") {
        cal = Math.round(BMR) * 1.2;
    } else if (document.getElementById('activity').value == "3") {
        cal = Math.round(BMR * 1.375);
    } else if (document.getElementById('activity').value == "4") {
        cal = Math.round(BMR * 1.55);
    } else if (document.getElementById('activity').value == "5") {
        cal = Math.round(BMR * 1.725);
    } else if (document.getElementById('activity').value == "6") {
        cal = Math.round(BMR * 1.9);
    }

    var calCount = cal;
    sessionStorage.setItem("calCount", calCount);
    window.location = 'food_input.html';
}


function getCalCount() {
    calCount1.innerHTML = calCount + "<br /> calories/day";
}

function addFood() {
    calCount -= document.getElementById('foodCal').value;
    getCalCount();
    
    foodList += document.getElementById('foodName').value + " | " + document.getElementById('foodCal').value + " calories <br />";
    document.getElementById('foodName').value = '';
    document.getElementById('foodCal').value = '';
    document.getElementById('food-list').innerHTML = foodList;
} 
