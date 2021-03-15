function CurrentTime() {
    var date = new Date();
    var options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    options.timeZoneName = 'short';
    var time = new Intl.DateTimeFormat('en-US', options).format(date);
    setInterval(CurrentTime, 1000);
    document.getElementById('demo').innerHTML = time;

}