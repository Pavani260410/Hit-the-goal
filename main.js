var canvas = new fabric.Canvas('canvas');
//ball x and y
var ballx = Math.floor(Math.random() * 500);
var bally = Math.floor(Math.random() * 500);
//hole x and y
var holex = Math.floor(Math.random() * 500);
var holey = Math.floor(Math.random() * 500);
//ball width and height
var ballw = 50;
var ballh = 50;
//loading hole and golf ball
function load_img() {
    fabric.Image.fromURL('golf-h.png', function (img) {
        hole = img;
        hole.scaleToWidth(60);
        hole.scaleToHeight(60);
        hole.set({
            top: holey,
            left: holex
        });
        canvas.add(hole);
    });

    fabric.Image.fromURL('ball.png', function (img) {
        ball = img;
        ball.scaleToWidth(ballw);
        ball.scaleToHeight(ballh);
        ball.set({
            top: bally,
            left: ballx
        });
        canvas.add(ball);
    });
}
//move up, down, left and right
window.addEventListener('keydown', keydown);

function keydown(e) {
    key = e.keyCode;
    if (key == 37) {
        ballx -= 1;
        canvas.remove(ball);
        load_img();
    }
    if (key == 38) {
        bally -= 1;
        canvas.remove(ball);
        load_img();
    }
    if (key == 39) {
        ballx += 1;
        canvas.remove(ball);
        load_img();
    }
    if (key == 40) {
        bally += 1;
        canvas.remove(ball);
        load_img();
    }

    if (holex <= (ballx - 7) && holey <= (bally - 3) && holey >= (bally - 8) && holex >= (ballx - 12)) {
        won();
    }
}

function won() {
    console.log("yes");
    document.getElementById('hd3').innerHTML = "You won!";
    setInterval(function () {
        if (ballw > 0 && ballh > 0) {
            ballx += 2.5;
            bally += 2.5;
            ballw -= 5;
            ballh -= 5;
            load_img();
        } else {
            canvas.remove(ball);
            load_img();
            document.getElementById('replay').style.visibility = "visible";
        }
    }, 500);

}

function replay() {
    location.reload();
}
