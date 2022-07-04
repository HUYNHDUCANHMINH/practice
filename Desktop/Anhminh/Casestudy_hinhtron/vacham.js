function checkCollision(cir, rect) {
    let Ax = cir.x;
    let Ay = cir.y;

    let rect_left = rect.x;
    let rect_top = rect.y;
    let rect_right = rect.x + rect.w;
    let rect_bottom = rect.y + rect.h;

    if (cir.x < rect_left)
        Ax = rect_left;
    else if (cir.x > rect_right)
        Ax = rect_right;

    if (cir.y < rect_top)
        Ay = rect_top;
    else if (cir.y > rect_bottom)
        Ay = rect_bottom;

    let dx = cir.x - Ax;
    let dy = cir.y - Ay;

    return (dx * dx + dy * dy) <= cir.radius * cir.radius;
}