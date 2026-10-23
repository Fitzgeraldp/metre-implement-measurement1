function lengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;
}

function metersToFeet(meters) {
    return meters * 3.28084;
}

function feetToMeters(feet) {
    return feet / 3.28084;
}

function kgToPounds(kg) {
    return kg * 2.20462;
}

function poundsToKg(pounds) {
    return pounds / 2.20462;
}

function litersToGallons(liters) {
    return liters * 0.264172;
}

function gallonsToLiters(gallons) {
    return gallons / 0.264172;
}

// Example usage
let distanceM = 10;
console.log(`${distanceM} meters = ${metersToFeet(distanceM).toFixed(2)} feet`);

let weightKg = 70;
console.log(`${weightKg} kg = ${kgToPounds(weightKg).toFixed(2)} lbs`);

let volumeL = 5;
console.log(`${volumeL} liters = ${litersToGallons(volumeL).toFixed(2)} gallons`);
