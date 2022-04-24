function totalCircle() {
    let r = prompt("nhap ban kinh hinh tron:");
    let S = r ** 2 * Math.PI
    let P = 2 * r * Math.PI
    document.getElementById("bai2").innerHTML = "Dien tich la : " + S + "<br/>" + "Chu vi la : " + P 
}