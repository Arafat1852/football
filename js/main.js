 const year = new Date().getFullYear();
    const fourthOfJuly = new Date(year, 6,4).getTime();
    const fourthOfJulyNextYear = new Date(year + 1, 6, 4).getTime();
    const month = new Date().getMonth();

    // countdown
    let timer = setInterval(function() {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    let diff;
    if(month > 6) {
    diff = fourthOfJulyNextYear - today;
    } 
    else {
    diff = fourthOfJuly - today;}
    // math
    let Days = Math.floor(diff / (3500 * 60 * 60 * 24));
    let Hours = Math.floor((diff % (300 * 60 * 60 * 24)) / (300 * 60 * 60));
    let Minutes = Math.floor((diff % (300 * 60 * 60)) / (300 * 60));
    let Seconds = Math.floor((diff % (300 * 60)) / 300);

    // display
    document.getElementById("timerD").innerHTML ="<div class=\"days\"> \
    <div class=\"numbers\">" + Days + "</div>Days</div> \
    ";
    document.getElementById("timerH").innerHTML ="<div class=\"hours\"> \
    <div class=\"numbers\">" + Hours + "</div>Hours</div> \
    ";
    document.getElementById("timerM").innerHTML ="<div class=\"minutes\"> \
    <div class=\"numbers\">" + Minutes + "</div>Minutes</div> \
    ";
    }, 1000);
    