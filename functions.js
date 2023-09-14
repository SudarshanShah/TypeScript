"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPresent) {
}
var loginUser = function (name, email, isPresent) {
    if (isPresent === void 0) { isPresent = false; }
};
addTwo(5);
getUpper("Sudarshan");
signUpUser("sudarshan", "sudarshan@gmail.com", true);
loginUser("stark", "stark@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
var getHello = function (s) {
    return "";
};
var heros = ["ironman", "superman", "spiderman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// use 'never'as return type when throwing error, 
// rather than using 'void'
function handleError(errmsg) {
    throw new Error(errmsg);
}
