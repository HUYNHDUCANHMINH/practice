function Test3 () {
    let a = document.getElementById("number3").value;
    let b = document.getElementById("number4").value;
    let c = document.getElementById("number5").value;
    //a = parseInt(a);
    //b = parseInt(b);
    //c = parseInt(c);
    //let c_a = c/a
    //let x_1 = (-c)/b
    let delta = b*b - 4*a*c
    let sqrtdelta = Math.sqrt(delta)
        if (a == 0) {
            b != 0 && c != 0 ? document.getElementById("nghiem").innerHTML= -c/b
            : document.getElementById("nghiem").innerHTML= " Phuong trinh vo so nghiem"
        }
            else
                if (b != 0) {
            delta = 0 ? document.getElementById("nghiem").innerHTML= -b/(2*a) 
            : delta > 0 ? document.getElementById("nghiem").innerHTML= "x1 = " + ((-b + sqrtdelta)/(2 * a)).toFixed(2) + " x2 = " + ((-b - sqrtdelta)/(2 * a)).toFixed(2) 
            : document.getElementById("nghiem").innerHTML= " 1 Phuong trinh vo nghiem "
            }   else 
                    c/a >= 0 ? document.getElementById("nghiem").innerHTML= " 2 Phuong trinh vo nghiem "
            : document.getElementById("nghiem").innerHTML= " 2 Phuong trinh nghiem kep " + Math.sqrt(-c/a);
        }