function CAL() {
    let math = parseFloat(document.querySelector("#math").value);
    let lit = parseFloat(document.querySelector("#lit").value);
    let eng = parseFloat(document.querySelector("#eng").value);
    let area = parseFloat(document.querySelector("#area").value);
    Total = math + lit + eng + area
    document.getElementById("result2").innerHTML=Total;
    //let aver = document.getElementById("cal").value;
        aver = Total/3
    let display = aver <= 4 ? -1 : aver <= 5 ? 0 : aver <= 7 ? 1 : 7 < aver ? 2 : 3
    switch (display) {
        case 0 : 
            document.getElementById("blank").innerHTML="Trung Binh"
            document.getElementById("Grade").innerHTML="Tot Nghiep nhung phai hoan tat cac mon duoi 5.0 diem"
        break;
        case 1 : 
            document.getElementById("blank").innerHTML="Kha";
            document.getElementById("Grade").innerHTML="Tot Nghiep Loai Kha"
        break;
        case 2 : 
            document.getElementById("blank").innerHTML="Gioi";
            document.getElementById("Grade").innerHTML="Tot Nghiep Loai Gioi"
        break;
        case 3 : 
            document.getElementById("blank").innerHTML="Yeu"
            document.getElementById("Grade").innerHTML="Khong duoc Tot Nghiep"
        break;
        case -1 : 
        document.getElementById("blank").innerHTML="Kem"
        document.getElementById("Grade").innerHTML="Khong duoc Tot Nghiep"
        break
    }
}
