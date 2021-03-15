function CalculateSupply() {
    var age = Number(document.getElementById('age').value);
    var maxage = Number(document.getElementById('maxage').value);
    var perday = Number(document.getElementById('perday').value);
    var food = String(document.getElementById('food').value);

    var kg = (maxage - age) * 365 * perday;
    document.getElementById('result3').innerHTML =kg+ 'kg of '+food+' would be enough until I am '+maxage+' years old.';


}