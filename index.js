// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let myarray = [drivers[0], drivers[1]];
    return myarray;
}
const returnLastTwoDrivers = function(drivers){
    let mynewArray = drivers.slice(-2);
    return mynewArray;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(myNum){
    if (myNum < 0)return;//exits program if number entered is below 0
    return myMultiplier = fare => fare*myNum;//My arrow fxn that takes in one argument('fare') and multiplies it with myNum
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}
