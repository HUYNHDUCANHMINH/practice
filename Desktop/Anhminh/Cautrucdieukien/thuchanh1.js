function test1() {
    let th1 = document.getElementById("th1").value;
    if (th1 == "ECMAScript") {
        alert("Right");
    }
        else {
            alert("Didn't know> ECMAScript");
        }
    }
function test2() {
    let user = document.getElementById("user").value;
    let pw = document.getElementById("pw").value;
        if (user != "Admin" && pw!="TheMaster") {
                alert("cancel, ban phai nhap dung ten va Password");
            }
            else if (user =="Admin" && pw == "TheMaster") {
                alert("Welcome");
            }
                else if (user != "Admin" && pw=="TheMaster"){
                    alert("Wrong ID")
                }
                    else if (pw == null) {
                        alert("Canceled, Input right password");
                    }
                    else {
                        alert("Wrong password");
                    }
}
function test3(){
    let message = document.getElementById("message").value;
    switch (message){
    case "Edge" : 
        alert("You've got the Edge!");
        break;
    case "Chrome" :
    case "Firefox" :
    case "Safari" :
    case "Opera" :
        alert("Okey We support these browser too!")
        break;
    default :
        alert("We hope that this page looks ok!")
    }
}
function test4(){
    let a = +prompt("Nhap so a la: ","");
    switch (a) {
        case 0 :
            document.getElementById("a").innerHTML=a
            break;
        case 1 :
            document.getElementById("a").innerText=a
            break;
        case 2 :
        case 3 : 
            alert("2,3")
            break;
    }
}
function test5() {
    let b = prompt("Nhap so b can tim la: ");
    let b1 = b > 0 ? 1 : b < 0 ? -1 : 0
    switch (b1) {
        case 1 : 
            alert(1); 
        break;
        case -1 : 
            alert(-1);
        break;
        case 0: 
            alert(0);
        break;
    }
}