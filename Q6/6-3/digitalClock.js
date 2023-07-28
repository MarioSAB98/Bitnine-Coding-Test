function myDigitalClock() {
    var d1 = new Date();
    var hours = d1.getHours(); // 0 - 23
    var minutes = d1.getMinutes(); // 0 - 59
    var seconds = d1.getSeconds(); // 0 - 59
    var zone = "AM";

    // 12-hours format (since we have am-pm it's not logic to display 24-hours format)
    if (hours >= 12) {
        if (hours > 12) hours -= 12;
        zone = "PM";
    }
    else if (hours == 0) {
        hours = 12;
    }


    //add a leading zero before numbers less than 10
    hours =
        hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //set time
    let currentTime = hours + ":" + minutes + ":" + seconds + " " + zone;


    //display time
    console.log(currentTime);
}

myDigitalClock();

//update the clock every second (the smallest unit we can display)
setInterval(myDigitalClock, 1000);
