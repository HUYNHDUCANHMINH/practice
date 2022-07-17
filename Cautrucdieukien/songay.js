function Nhapnam() {
    let year = document.getElementById("year").value;
        if (year % 4 == 0 && year % 100 != 0) {
            document.getElementById("YEAR").innerHTML= " Nam " + year + " la nam nhuan";}
            else if ( year % 400 == 0 ) {
                document.getElementById("YEAR").innerHTML= " Nam " + year + " la nam nhuan";}
        else {
            document.getElementById("YEAR").innerHTML= " Nam " + year + " khong la nam nhuan";}
}
function checkmonth() {
    //let month = parseInt(document.getElementById("num").value);
    let NUMBER = document.getElementById("number").value;
        NUMBER = parseInt(NUMBER);
    switch (NUMBER) {
        case 1 : 
        case 3 : 
        case 5 : 
        case 7 : 
        case 8 : 
        case 10 : 
        case 12 : {
            document.getElementById("a").innerHTML= "Thang " + NUMBER + " co 31 ngay"
        }
        break;
        case 2 : {
            let year = document.getElementById("year").value;
        if (year % 4 == 0 && year % 100 != 0) {
            document.getElementById("a").innerHTML= " Do Nam " + year + " la nam nhuan nen thang " + NUMBER + " co 29 ngay";}
            else if ( year % 400 == 0 ) {
                document.getElementById("a").innerHTML= " Do Nam " + year + " la nam nhuan nen thang " + NUMBER + " co 29 ngay";}
        else {
            document.getElementById("a").innerHTML= " Do Nam " + year + " khong la nam nhuan nen thang " + NUMBER + "  co 28 ngay";}
}
        break;
        case 4 : 
        case 6 : 
        case 9 : 
        case 11 : {
            document.getElementById("a").innerHTML= "Thang " + NUMBER + " co 30 ngay"
        }
        break
        default : {
            document.getElementById("a").innerHTML= " Day khong phai la thang trong nam"
        }
    }
}