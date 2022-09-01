var countDownDate = new Date("Aug 20, 2022 10:23:53").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var days = math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var days = math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("demo").innerHTML = days + "d" + hours + "h" + minutes + "m " + seconds + "s ";

    if (distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);