function CalculateKnots()
{
    var km = Number(document.getElementById("km").value);
    var hours = Number(document.getElementById("hours").value);
    var sp = km / hours;
    var kn = parseFloat(sp / 1.852);
    document.getElementById('result2').innerHTML = "Knots: " + kn.toFixed(2);
}