function regCheck(registrationNumber, provinceCode) {
    return registrationNumber.endsWith(provinceCode);
}

module.exports = regCheck;
