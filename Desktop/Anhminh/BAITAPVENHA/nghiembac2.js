function Test3 () {
    let a = document.getElementById("number3").value;
    let b = document.getElementById("number4").value;
    let c = document.getElementById("number5").value;
    //a = parseInt(a);
    //b = parseInt(b);
    //c = parseInt(c);
    //let c_a = c/a
    //let x_1 = (-c)/b
    let delta = Math.pow(b,2) - 4*a*c
        if (a == 0) {
            if (b == 0) {
                if ( c == 0) {
                    document.getElementById("nghiem").innerHTML= " 1 Phuong trinh vo so nghiem";
                } else {
                    document.getElementById("nghiem").innerHTML= " 1 Phuong trinh vo nghia";
                } else {
                    
                }
            if (b == 0 && c >=0) {
                    document.getElementById("nghiem").innerHTML= " 2 Phuong trinh vo nghiem" 
            }else {
                document.getElementById("nghiem").innerHTML= " 2 Phuong trinh nghiem kep" + Math.sqrt(-c/a)
            }if (delta >=0) {
                document.getElementById("nghiem").innerHTML= "x1 = " + ((-b + Math.sqrt(delta))/2 * a).toFixed(2) + " x2 = " + ((-b - Math.sqrt(delta))/2 * a).toFixed(2);
            }else {
                document.getElementById("nghiem").innerHTML= " 3 Phuong trinh vo nghiem" 
            }
        }
