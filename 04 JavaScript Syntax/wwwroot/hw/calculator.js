
function Buttons() {
    var opt = "";
    var option = "";
    // Add active class to the current button (highlight it)
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            opt = String(this.value);
            console.log(opt);
        });
        if (btns[i].className == "btn active") {
            option = btns[i].value;
            console.log(option);
        }
        
    }  
    return option;
}
function Calculator() {

    let a = Number(document.getElementById("One").value);
    let b = Number(document.getElementById("Two").value);
    let option = Buttons();

    let result = "<hr>Your expression: ";
    let calculation = eval(a + option + b);
    result = result + a +" "+ option +" "+ b + ' = ' + calculation;

    document.getElementById("result").innerHTML = result;
}