

function DisplayArea() {
    console.log(CircleArea(7));
    console.log(CircleArea(1.5));
    console.log(CircleArea(20));

}

function CircleArea(r) {
    var area = Math.PI * r * r;
    var result = "Radius: " + r + " Area: " + area;
    return result;
}