// ========================================
// CONTROLS
// ========================================


// Connect all buttons and sliders
function initializeControls() {

    // Get our buttons
    const randomizeButton = document.getElementById("randomize-btn");
    const exportButton = document.getElementById("export-btn");
    const resetButton = document.getElementById("reset-btn");


    // Get our sliders and inputs
    const densityInput = document.getElementById("density");
    const scaleInput = document.getElementById("scale");
    const shapeInput = document.getElementById("shape-type");
    const seedInput = document.getElementById("seed");


    // RANDOMIZE BUTTON
    randomizeButton.addEventListener("click", function () {

        // Create a new random number
        appSettings.seed = generateSeed();

        // Show the new number in the input
        seedInput.value = appSettings.seed;

        // Generate new artwork
        renderCanvas();

    });


    // DENSITY SLIDER
    densityInput.addEventListener("input", function () {

        appSettings.density = Number(densityInput.value);

        renderCanvas();

    });


    // SCALE SLIDER
    scaleInput.addEventListener("input", function () {

        appSettings.scale = Number(scaleInput.value);

        renderCanvas();

    });


    // SHAPE SELECTOR
    shapeInput.addEventListener("change", function () {

        appSettings.shapeType = shapeInput.value;

        renderCanvas();

    });


    // SEED INPUT
    seedInput.addEventListener("change", function () {

        appSettings.seed = Number(seedInput.value);

        renderCanvas();

    });


    // RESET BUTTON
    resetButton.addEventListener("click", function () {

        resetSettings();

    });


    // EXPORT BUTTON
    exportButton.addEventListener("click", function () {

        exportArtwork();

    });


    // CREATE PALETTE BUTTONS
    createPaletteButtons();

}


// CREATE COLOR PALETTE BUTTONS
function createPaletteButtons() {

    const paletteContainer = document.getElementById("palette-options");

    paletteContainer.innerHTML = "";


    // Loop through every palette
    for (const paletteName in palettes) {

        // Create a button
        const button = document.createElement("button");

        button.classList.add("palette-button");

        button.setAttribute("aria-label", paletteName);


        // Get the colors for this palette
        const colors = palettes[paletteName];


        // Show the colors inside the button
        button.style.background = `linear-gradient(90deg, ${colors.join(", ")})`;


        // When clicked
        button.addEventListener("click", function () {

            // Change the selected palette
            appSettings.palette = colors;

            // Change the background color
            appSettings.background = colors[0];

            // Draw the artwork again
            renderCanvas();

        });


        // Add the button to the page
        paletteContainer.appendChild(button);

    }

}


// RESET SETTINGS
function resetSettings() {

    // Restore original settings
    appSettings = {

        density: 60,

        scale: 50,

        shapeType: "all",

        palette: palettes.editorial,

        background: "#F2EFE8",

        seed: 48291

    };


    // Update the controls
    document.getElementById("density").value = appSettings.density;

    document.getElementById("scale").value = appSettings.scale;

    document.getElementById("shape-type").value = appSettings.shapeType;

    document.getElementById("seed").value = appSettings.seed;


    // Draw the artwork again
    renderCanvas();

}


// EXPORT ARTWORK
function exportArtwork() {

    saveCanvas("my-generative-artwork", "png");

}