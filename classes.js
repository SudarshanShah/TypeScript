var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Jodhpur";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var UserBetterWay = /** @class */ (function () {
    function UserBetterWay(email, name) {
        this.email = email;
        this.name = name;
        // protected fields are accessible within the class and those classes which inherits this class
        this._courseCount = 1;
        this.city = "Jodhpur";
    }
    // private methods
    UserBetterWay.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(UserBetterWay.prototype, "getAppleEmail", {
        // getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserBetterWay.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        // setter
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return UserBetterWay;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4;
    };
    return SubUser;
}(UserBetterWay));
var sudarshan = new User("ss@aa.com", "sudarshan");
