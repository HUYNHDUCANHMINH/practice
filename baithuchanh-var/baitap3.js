function cash() {
    let C = prompt("So tien goi ban dau")
    let year = prompt("So nam goi tien")
    let r = prompt("lai suat tien goi nam")
        if (r <= 0) {
            alert("ban da nhap sai gia tri lai suat")
            reset(r)
        }
        else {
            r = r/100
        }
        let TotalMoneylaidon = C * (1 + year * r)
        let TotalMoneylaighep = C * (1 + r) ** year
            TotalMoneylaighep = TotalMoneylaighep.toFixed(2)
        document.getElementById("bai3").innerHTML = "Tien goi sau " + year + " nam theo lai don la " + TotalMoneylaidon + "<br/>" + "Tien goi sau " + year + " nam theo lai ghep la " + TotalMoneylaighep
        }
    