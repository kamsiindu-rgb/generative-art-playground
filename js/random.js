function setRandomSeed(seed) {
    randomSeed(seed);
    noiseSeed(seed);
}

function generateSeed() {
    return Math.floor(Math.random() * 999999);
}

function setRandomSeed(seed) {

    randomSeed(seed);

    noiseSeed(seed);

}

function generateSeed() {

    return Math.floor(Math.random() * 999999);

}