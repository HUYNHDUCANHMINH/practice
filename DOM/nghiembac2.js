function Test3 () {
            let a = document.querySelector("#number3").value;
            let b = document.getElementById("number4").value;
            let c = document.getElementById("number5").value;
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);
                if (a == 0 && b,c != 0) {
                    document.write("Phuong trinh co mot nghiem x la " + -c/b);
                }
                    else {
                        if (b == 0) {
                            document.write("Phuong trinh co mot nghiem kep x1 = x2 = " +c/a);
                        }
                            else {
                                let delta = b**2 - 4*a*c
                                if (delta < 0) {
                                    document.write(" Phuong trinh vo nghiem");
                                }
                                    else {
                                        if (delta >0) {
                                        document.write(" Phuong trinh co hai nghiem");
                                        document.write("x1 = " + (-b + Math.sqrt(delta))/2 * a);
                                        document.write("x1 = " + (-b - Math.sqrt(delta))/2 * a);
                                    }
                                            else (delta == 0) {
                                                document.write("Phuong trinh co nghiem kep x= " + -b/a);
                                            }