let canvas;

function setup() {
    const wrapper = document.getElementById("canvas-wrapper");

    canvas = createCanvas(1080, 1080);

    canvas.parent(wrapper);

    pixelDensity(1);

    noLoop();

    renderCanvas();
}

function renderCanvas() {
    generateArtwork(appSettings);
}

function windowResized() {
    resizeCanvas(1080, 1080);

    renderCanvas();
}
// ========================================
// CANVAS SETUP
// ========================================


// Create our canvas
function setup() {

    // Create a square drawing area
    canvas = createCanvas(1080, 1080);

    // Put the canvas inside our HTML container
    canvas.parent("canvas-wrapper");

    // Improve drawing quality
    pixelDensity(1);

    // We don't want constant animation
    noLoop();

    // Draw our first artwork
    renderCanvas();

}


// Draw the artwork
function renderCanvas() {

    // Set the random seed
    setRandomSeed(appSettings.seed);

    // Generate the artwork
    generateArtwork(appSettings);

}


// Handle browser resizing
function windowResized() {

    renderCanvas();

}