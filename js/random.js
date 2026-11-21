function setRandomSeed(seed) {
    randomSeed(seed);
    noiseSeed(seed);
}

function generateSeed() {
    return Math.floor(Math.random() * 999999);
}
// ========================================
// RANDOM NUMBER SYSTEM
// ========================================


// Set the random number starting point
function setRandomSeed(seed) {

    randomSeed(seed);

    noiseSeed(seed);

}


// Create a new random seed
function generateSeed() {

    return Math.floor(Math.random() * 999999);

}