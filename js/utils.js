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

function clamp(value, min, max) {

    return Math.max(min, Math.min(max, value));

}

function mapRange(value, inputMin, inputMax, outputMin, outputMax) {

    return outputMin +
        ((value - inputMin) / (inputMax - inputMin)) *
        (outputMax - outputMin);

}

function randomFromArray(array) {

    const index = Math.floor(Math.random() * array.length);

    return array[index];

}

function randomNumber(min, max) {

    return Math.random() * (max - min) + min;

}