function returnFirstTwoDrivers(drivers) {
    const firstTwo = () => drivers.slice(0, 2)
    return firstTwo()
}

function returnLastTwoDrivers(drivers) {
    const lastTwo = () => drivers.slice(-2)
    return lastTwo()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return (fare) => fare * int;
}

function fareDoubler(fare) {
    const doubledFare = createFareMultiplier(2);
    return doubledFare(fare)
}

function fareTripler(fare) {
    const tripledFare = createFareMultiplier(3);
    return tripledFare(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}