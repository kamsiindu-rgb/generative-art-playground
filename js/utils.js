function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function mapRange(value, inputMin, inputMax, outputMin, outputMax) {
    return outputMin +
        ((value - inputMin) / (inputMax - inputMin)) *
        (outputMax - outputMin);
}

function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// ========================================
// HELPER FUNCTIONS
// ========================================


// Keeps a number within a certain range
function clamp(value, min, max) {

    return Math.max(min, Math.min(max, value));

}


// Converts a number from one range to another
function mapRange(value, inputMin, inputMax, outputMin, outputMax) {

    return outputMin +
        ((value - inputMin) / (inputMax - inputMin)) *
        (outputMax - outputMin);

}


// Picks one random item from a list
function randomFromArray(array) {

    const index = Math.floor(Math.random() * array.length);

    return array[index];

}


// Creates a random number between two numbers
function randomNumber(min, max) {

    return Math.random() * (max - min) + min;

}