function detectType(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function isAdmin(account) {
    // narrowing down type to Admin
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// ------------- 'instanceof' 
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "cicle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "cicle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
    }
}
