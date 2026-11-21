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




function setup() {

    canvas = createCanvas(1080, 1080);

    canvas.parent("canvas-wrapper");

    pixelDensity(1);

    noLoop();

    renderCanvas();

}


function renderCanvas() {


    setRandomSeed(appSettings.seed);


    generateArtwork(appSettings);

}



function windowResized() {

    renderCanvas();

}