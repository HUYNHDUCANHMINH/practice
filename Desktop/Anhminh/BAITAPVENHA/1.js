function laygiatri(){
    let display = document.getElementById("value").value;
    display = Math.pow(display,2).toFixed(2)
    document.getElementById("display").innerHTML = display
}
function Multi() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let S = (a * b).toFixed(2)
    document.getElementById("display1").innerHTML = S
}