// ========================================
// GENERATIVE ART ENGINE
// ========================================


// Main artwork generator
function generateArtwork(settings) {

    // Set the background color
    background(settings.background);

    // Get our selected colors
    const colors = settings.palette;

    // Get the number of shapes to draw
    const density = settings.density;

    // Get the size of our shapes
    const scale = settings.scale;

    // Get the selected shape type
    const shapeType = settings.shapeType;


    // Draw shapes
    for (let i = 0; i < density; i++) {

        // Random position
        const x = random(width);
        const y = random(height);

        // Random size
        const size = random(scale * 0.3, scale);

        // Random color
        const color = randomFromArray(colors);


        // Apply the color
        fill(color);

        noStroke();


        // Draw the selected shape
        if (shapeType === "all") {

            drawRandomShape(x, y, size);

        } else {

            drawShapeByType(x, y, size, shapeType);

        }

    }

}


// Choose a random shape
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


// Draw a specific type of shape
function drawShapeByType(x, y, size, shape) {


    // Circles
    if (shape === "circles") {

        ellipse(x, y, size, size);

    }


    // Rectangles
    else if (shape === "rectangles") {

        rect(x, y, size, size);

    }


    // Lines
    else if (shape === "lines") {

        strokeWeight(random(1, 5));

        line(
            x,
            y,
            x + size,
            y + size
        );

    }


    // Polygons
    else if (shape === "polygons") {

        drawPolygon(x, y, size);

    }

}


// Draw a polygon
function drawPolygon(x, y, size) {

    // Choose the number of sides
    const sides = Math.floor(random(3, 8));


    // Start drawing the shape
    beginShape();


    // Create each corner
    for (let i = 0; i < sides; i++) {

        const angle = TWO_PI / sides * i;

        const px = x + cos(angle) * size;

        const py = y + sin(angle) * size;

        vertex(px, py);

    }


    // Finish the shape
    endShape(CLOSE);

}