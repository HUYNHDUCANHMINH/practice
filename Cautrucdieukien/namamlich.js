function amlich(){
    let amlich = parseInt(document.getElementById("amlich").value);
    let CAN = parseInt(amlich%10);
    let CHI = parseInt(amlich%12);
    let NAMAMLICH = amlich + " la nam "
    switch (CAN) {
        case 0 : NAMAMLICH += "CANH "
        break
        case 1 : NAMAMLICH += "TAN "
        break
        case 2 : NAMAMLICH += "NHAM "
        break
        case 3 : NAMAMLICH += "QUY "
        break
        case 4 : NAMAMLICH += "GIAP "
        break
        case 5 : NAMAMLICH += "AT "
        break
        case 6 : NAMAMLICH += "BINH "
        break
        case 7 : NAMAMLICH += "DINH "
        break
        case 8 : NAMAMLICH += "MAU "
        break
        case 9 : NAMAMLICH += "KY "
        break
    }
    switch (CHI) {
        case 0 : NAMAMLICH += "THAN"
        break
        case 1 : NAMAMLICH += "DAU"
        break
        case 2 : NAMAMLICH += "TUAT"
        break
        case 3 : NAMAMLICH += "HOI"
        break
        case 4 : NAMAMLICH += "TY"
        break
        case 5 : NAMAMLICH += "SUU"
        break
        case 6 : NAMAMLICH += "DAN"
        break
        case 7 : NAMAMLICH += "MEO"
        break
        case 8 : NAMAMLICH += "THIN"
        break
        case 9 : NAMAMLICH += "TY"
        break
        case 10 : NAMAMLICH += "NGO"
        break
        case 11 : NAMAMLICH += "MUI"
        break
    }
    document.getElementById("AMLICH").innerHTML=NAMAMLICH
}