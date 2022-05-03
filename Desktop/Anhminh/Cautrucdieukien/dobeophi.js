function BMI() {
    let Weight = +prompt("wei");
    let High = +prompt("hei");
        High = High/100
    let Bmi = Weight / Math.pow(High,2)
        Bmi = Bmi.toFixed(2)
    document.getElementById("weight").innerHTML=Bmi
    if ( Bmi < 16 ) {
        document.getElementById("b").innerHTML=" Gay do III";}
        else if (16 >= Bmi) {
            document.getElementById("b").innerHTML=" Gay do II";}
            else if (17 >= Bmi) {
                document.getElementById("b").innerHTML=" Gay do I";}
                else if (18.5 >= Bmi) {
                    document.getElementById("b").innerHTML=" Binh Thuong";}
                    else if (25 >= Bmi) {
                        document.getElementById("b").innerHTML=" Thua can";}
                        else if (30 >= Bmi) {
                            document.getElementById("b").innerHTML=" Beo Phi do I";}
                            else if (35 >= Bmi) {
                                document.getElementById("b").innerHTML=" Beo Phi do II";}
    else {
        document.getElementById("b").innerHTML=" Beo Phi do III";}
    }                