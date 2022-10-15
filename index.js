const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
    const fareMultiplier = function (fare) {
        return (fare * num);
    }
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);