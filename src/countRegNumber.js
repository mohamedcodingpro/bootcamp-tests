function countRegNumber(registrationString) {
    let registrationArray = registrationString.split(',');
    return registrationArray.length;
}
module.exports = countRegNumber;
