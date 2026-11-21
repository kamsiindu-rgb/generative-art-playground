function initializeControls() {

    const randomizeButton = document.getElementById("randomize-btn");
    const exportButton = document.getElementById("export-btn");
    const resetButton = document.getElementById("reset-btn");
    const densityInput = document.getElementById("density");
    const scaleInput = document.getElementById("scale");
    const shapeInput = document.getElementById("shape-type");
    const seedInput = document.getElementById("seed");



    randomizeButton.addEventListener("click", function () {

        appSettings.seed = generateSeed();
        seedInput.value = appSettings.seed;
        renderCanvas();

    });

    densityInput.addEventListener("input", function () {

        appSettings.density = Number(densityInput.value);

        renderCanvas();

    });

    scaleInput.addEventListener("input", function () {

        appSettings.scale = Number(scaleInput.value);

        renderCanvas();

    });


    shapeInput.addEventListener("change", function () {

        appSettings.shapeType = shapeInput.value;

        renderCanvas();

    });


    seedInput.addEventListener("change", function () {

        appSettings.seed = Number(seedInput.value);

        renderCanvas();

    });

    resetButton.addEventListener("click", function () {

        resetSettings();

    });

    exportButton.addEventListener("click", function () {

        exportArtwork();

    });


    createPaletteButtons();

}

function createPaletteButtons() {

    const paletteContainer = document.getElementById("palette-options");

    paletteContainer.innerHTML = "";

    for (const paletteName in palettes) {
        const button = document.createElement("button");

        button.classList.add("palette-button");

        button.setAttribute("aria-label", paletteName);


        const colors = palettes[paletteName];

        button.style.background = `linear-gradient(90deg, ${colors.join(", ")})`;

        button.addEventListener("click", function () {
            appSettings.palette = colors;

            appSettings.background = colors[0];
            renderCanvas();

        });

        paletteContainer.appendChild(button);

    }

}



function resetSettings() {

    appSettings = {

        density: 60,

        scale: 50,

        shapeType: "all",

        palette: palettes.editorial,

        background: "#F2EFE8",

        seed: 48291

    };


    document.getElementById("density").value = appSettings.density;

    document.getElementById("scale").value = appSettings.scale;

    document.getElementById("shape-type").value = appSettings.shapeType;

    document.getElementById("seed").value = appSettings.seed;



    renderCanvas();

}


function exportArtwork() {

    saveCanvas("my-generative-artwork", "png");

}