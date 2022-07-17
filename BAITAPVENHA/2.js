function CAL1(){
    let c = document.getElementById("c").value;
    let P = (c*4).toFixed(2);
    let S = Math.pow(c,2).toFixed(2);
    document.getElementById("display2").innerHTML = P + " cm"
    document.getElementById("display3").innerHTML = S + " c㎡"
}
function CAL2(){
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let binhphuong_c = Math.pow(c,2).toFixed(2);
    let binhphuong_d = Math.pow(d,2).toFixed(2);
    document.getElementById("display4").innerHTML = "cua c : " + binhphuong_c + " cua d: " + binhphuong_d
}
function Allsub(){
    let c = parseInt(document.getElementById("c").value);
    let d = parseInt(document.getElementById("d").value);
    let nn = (d-c)+1 
    let Allsub = (nn * (d+c))/ 2
    if (nn > 0) {
        document.getElementById("display5").innerHTML = Allsub;
    }
        else 
        alert("So c phai nho hon so d, xin vui long nhap lai")
}