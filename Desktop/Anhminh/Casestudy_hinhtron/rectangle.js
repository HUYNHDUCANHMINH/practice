    // Tao class 2 hinh chu nhat
    class Rect {
    constructor(a, b, width, height) {
        this.a = a;
        this.b = b;
        this.w = width;
        this.h = height;
    }
    drawRectangle () {
        ctx.lineWidth = 10
        ctx.lineJoin = "bevel"
        ctx.strokeStyle = "orange"
        ctx.strokeRect(this.a, this.b, this.w, this.h)
        let rectangle2 = new Rect(canvas.width*0.99, canvas.height*0.5, 10,10)
    }
    drawRectangle1 () {
        ctx.lineWidth = 10
        ctx.lineJoin = "bevel"
        ctx.font = "20px Georgia";
        ctx.fillText ("G",canvas.width*0.015,canvas.height*0.45)
        ctx.fillText ("O",canvas.width*0.015,canvas.height*0.5)
        ctx.fillText ("A",canvas.width*0.015,canvas.height*0.55)
        ctx.fillText ("L",canvas.width*0.015,canvas.height*0.6)
        ctx.strokeStyle = "magenta"
        ctx.strokeRect(this.a, this.b, this.w, this.h)
    }
    }
    let rectangle = new Rect(canvas.width*0.99, canvas.height*0.5, 10,10)
    rectangle.drawRectangle()
    let rectangle1 = new Rect(canvas.width*0.01, canvas.height*0.01, 35,canvas.height*0.98)
    rectangle1.drawRectangle1()

    // phương thức để di chuyển rectangle2 sang trái
    function moveLeft(rectangle) {
        rectangle.x -= 1
    }

    //phương thức để di chuyển rectangle2 sang phải
    function moveRight(rectangle) {
        rectangle.x += 1
    }

    function moveUp(rectangle) {
        rectangle.y -= 1
    }

    function moveDown(rectangle) {
        rectangle.y += 1
    }

    //phương thức để gọi 2 hàm di chuyển của rectangle2
    function moveSelection(evt) {
        switch(evt.keyCode) {
            case 37:
                moveLeft(rectangle1);
                break;
            case 38 :
                moveUp(rectangle1);
                break
            case 39:
                moveRight(rectangle1);
                break;
            case 40 :
                moveDown(rectangle1);
                break
        }
    }
    //tạo hàm lắng nghe sự kiện keydown cho window
    window.addEventListener("keydown", moveSelection)