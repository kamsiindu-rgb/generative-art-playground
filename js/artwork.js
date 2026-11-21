
function generateArtwork(settings) {

   
    background(settings.background);
    const colors = settings.palette;
    const density = settings.density;
    const scale = settings.scale;
    const shapeType = settings.shapeType;
    for (let i = 0; i < density; i++) {
        const x = random(width);
        const y = random(height);
        const size = random(scale * 0.3, scale);
        const color = randomFromArray(colors);
        fill(color);

        noStroke();
        if (shapeType === "all") {

            drawRandomShape(x, y, size);

        } else {

            drawShapeByType(x, y, size, shapeType);

        }

    }

}

function drawRandomShape(x, y, size) {

    const shapes = [
        "circles",
        "rectangles",
        "lines",
        "polygons"
    ];

    const chosenShape = randomFromArray(shapes);

    drawShapeByType(x, y, size, chosenShape);

}

function drawShapeByType(x, y, size, shape) {


    if (shape === "circles") {

        ellipse(x, y, size, size);

    }

    else if (shape === "rectangles") {

        rect(x, y, size, size);

    }

    else if (shape === "lines") {

        strokeWeight(random(1, 5));

        line(
            x,
            y,
            x + size,
            y + size
        );

    }

    else if (shape === "polygons") {

        drawPolygon(x, y, size);

    }

}

function drawPolygon(x, y, size) {

    const sides = Math.floor(random(3, 8));

    beginShape();

    for (let i = 0; i < sides; i++) {

        const angle = TWO_PI / sides * i;

        const px = x + cos(angle) * size;

        const py = y + sin(angle) * size;

        vertex(px, py);

    }


    endShape(CLOSE);

}