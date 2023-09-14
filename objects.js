"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Sudarshan",
    email: "sudarshan@mail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
createUser({ name: "sudarshan", isActive: false });
var newUser = { name: "sudarshan", isActive: false, email: "sudarshan@mail.com" };
// this is odd behaviour of TS
createUser(newUser);
function createCourse() {
    return { name: "NextJS", price: 500 };
}
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "ss",
    email: "ss@au.com",
    isActive: false
};
