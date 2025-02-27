$(function () {
    $("#audio").click();
});

$(function () {
    $("#audio").click();
});

document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 15, 2025 11:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with class="uk-countdown-number"
        document.querySelector(".uk-countdown-days span:nth-child(1)").innerHTML = Math.floor(days / 10);
        document.querySelector(".uk-countdown-days span:nth-child(2)").innerHTML = days % 10;
        document.querySelector(".uk-countdown-hours span:nth-child(1)").innerHTML = Math.floor(hours / 10);
        document.querySelector(".uk-countdown-hours span:nth-child(2)").innerHTML = hours % 10;
        document.querySelector(".uk-countdown-minutes span:nth-child(1)").innerHTML = Math.floor(minutes / 10);
        document.querySelector(".uk-countdown-minutes span:nth-child(2)").innerHTML = minutes % 10;
        document.querySelector(".uk-countdown-seconds span:nth-child(1)").innerHTML = Math.floor(seconds / 10);
        document.querySelector(".uk-countdown-seconds span:nth-child(2)").innerHTML = seconds % 10;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".uk-countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});