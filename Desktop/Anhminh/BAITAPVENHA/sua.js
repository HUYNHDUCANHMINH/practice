//if (a == 0 && b !== 0 && c !==0 ) {
    document.getElementById("nghiem").innerHTML = -c/b;
} else if (b == 0 || c == 0) {
    document.getElementById("nghiem").innerHTML= " 1 Phuong trinh vo nghia";
} else {
    document.getElementById("nghiem").innerHTML= " Phuong trinh vo nghiem"
}
if ( a !==0 && b !== 0){
    if ( delta < 0){
document.getElementById("nghiem").innerHTML= " Phuong trinh vo nghiem"
}   if ( delta >0) {
    document.getElementById("nghiem").innerHTML= "x1 = " + ((-b + Math.sqrt(delta))/2 * a).toFixed(2) + " x2 = " + ((-b - Math.sqrt(delta))/2 * a).toFixed(2);                    
}   if ( delta == 0){
    document.getElementById("nghiem").innerHTML= "Phuong trinh co nghiem kep x= " + -b/a;
} else 
    if ( c >= 0 ) {
        document.getElementById("nghiem").innerHTML= " Phuong trinh vo nghiem"
    } else 
        document.getElementById("nghiem").innerHTML= " Co mot nghiem kep x1 = x2 = " + Math.SQRT(-c/a)
    }}
if (a !== 0 && b == 0)
if ( c >= 0){
    document.getElementById("nghiem").innerHTML= " Phuong trinh vo nghiem"
}
else {
document.getElementById("nghiem").innerHTML= " Co mot nghiem kep x1 = x2 = " + Math.SQRT(-c/a)
}
