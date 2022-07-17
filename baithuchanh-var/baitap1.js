function Displaydate() {
    let date = prompt("Nhap ngay");
        if (date < 10) {
            date = "0" + date
        }
            else {
                date = date
            }
    let month = prompt("Nhap thang");
        if (month < 10) {
            month = "0" + month
        }
            else {
                month = month
            }
    let year = prompt("Nhap nam");
document.getElementById("bai1").innerText = date + "-" + month + "-" + year
}