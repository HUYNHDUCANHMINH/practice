function Gia() {
    let Price = document.getElementById("type").value;
    switch (Price) {
        case "Oi" :     
        case "Dua Hau" : 
            document.getElementById("result").innerHTML="Gia hien thi la 20000vnd/kg"
        break
        case "Tao" : 
        case "Xoai" : 
            document.getElementById("result").innerHTML="Gia hien thi la 30000vnd/kg"
        break
        case "Cam" : 
        case "Chom Chom" : 
            document.getElementById("result").innerHTML="Gia hien thi la 40000vnd/kg"
        break
        case "Mang Cut" : 
            document.getElementById("result").innerHTML="Gia hien thi la 50000vnd/kg"
        break
    }
    }