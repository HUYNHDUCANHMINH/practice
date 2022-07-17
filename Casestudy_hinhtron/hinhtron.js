class Circle {x; y; radius; widthX; heightY; color
    constructor (x, y , radius, widthX, heightY, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.widthX = widthX
    this.heightY = heightY;
    this.color = color
}
drawCircle() {
    ctx.beginPath()
    ctx.lineWidth = 20
    ctx.strokeStyle = "red"
    ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
    ctx.stroke()
    ctx.fillStyle = "aqua"
    ctx.arc(this.x, this.y, this.radius,0,2*Math.PI);
    ctx.fill()   
}
resetdrawCircle() {
    this.y += 3*this.heightY;
        if(this.y > canvas.height + this.radius) {
        this.y = -this.radius;
        }
        this.drawCircle()
    }
}
window.requestAnimationFrame = 
    canvas.width.requestAnimationFrame ||
    canvas.width.mozRequestAnimationFrame ||
    canvas.width.weblitRequestAnimationFrame ||
    canvas.width.msRequestAnimationFrame ||
function (cb) { 
        setTimeout(cb, 10); 
    }
// tao hinh tron roi o vi tri canvas.width 1/3 voi so hinh tron la number*1.8
function creatNumber_circle() {
    for(let i = 0; i < number * 2.8 ; i++) {
        let x = Math.floor(Math.random() * canvas.width*0.3 + canvas.width*0.06)
        let y = canvas.height*0.8
        let radius = Math.floor(Math.random() * 50 + 5);
        let widthX = Math.random() * 3;
        let heightY= Math.random() * 3 - 1;
        let circle = new Circle(x, y, radius, widthX, heightY)
        circleArray.push(circle);
    }
} creatNumber_circle()

// tao hinh tron roi o vi tri canvas.width 2/3 voi so hinh tron roi la number*1.5
function creatNumber_circle1() {
    for(let i = 0; i < number ; i++) {
        let x = Math.floor(Math.random() * canvas.width*0.3 + canvas.width*0.36)
        let y = canvas.height*0.5
        let radius = Math.floor(Math.random() * 50 + 5);
        let widthX = Math.random() * 4;
        let heightY = Math.random() * 4 - 1;
        let circle1 = new Circle(x, y, radius, widthX, heightY);
        circleArray.push(circle1);
    }
} creatNumber_circle1()

// tao hinh tron roi o vi tri canvas.width 3/3 voi so hinh tron roi la number*1.0
function creatNumber_circle2() {
    for(let i = 0; i < number*2 ; i++) {
        let x = Math.floor(Math.random() * canvas.width*0.3 + canvas.width*0.64)
        let y = canvas.height
        let radius = Math.floor(Math.random() * 50 + 5);
        let widthX = Math.random() * 5;
        let heightY = Math.random() * 5 - 1;
        let circle1 = new Circle(x, y, radius, widthX, heightY);
        circleArray.push(circle1);
    }
} creatNumber_circle2()

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].resetdrawCircle();
    }
    requestAnimationFrame(drawCircle);
} drawCircle()