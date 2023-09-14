var score = [];
var names = [];
function identityOne(val) {
    return val;
}
// NOT RECOMMENDED --> NEVER USE
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({ brand: "Milton", type: 2 });
// if input value is Array type, 
// then return value must be one of the value from the Array
function getSearchProducts(products) {
    var myIndex = 3;
    return products[myIndex];
}
// using generics in Arrow function
var getMoreSearchProducts = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
anotherFunction(3, { connection: "", username: "", password: "" });
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
