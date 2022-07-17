function totalCircle() {
    let r = prompt("nhap ban kinh hinh tron:");
    let S = r ** 2 * Math.PI
        S = S.toFixed(2)
    let P = 2 * r * Math.PI
        P = P.toFixed(2)
    document.getElementById("bai2").innerHTML = "Dien tich la : " + S + "<br/>" + "Chu vi la : " + P 
}