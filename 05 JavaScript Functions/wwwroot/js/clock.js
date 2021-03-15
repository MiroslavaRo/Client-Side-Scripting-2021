function Clock() {
    var date = new Date();
    var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var time = new Intl.DateTimeFormat('en-US', options).format(date);
    setInterval(Clock, 1000);
    document.getElementById('clock').innerHTML="Time is:"+ time;

}