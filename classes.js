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
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.unchangablename = firstname.concat(lastname);
        //console.log("A new user has been created : \n", this);
    }
    User.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    User.maxAge = 50; //static property is only accessible in the class and not in their instances
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user_1 = new User("sudip", "gurung");
console.log(user_1.getFullName());
// console.log(user_1.maxAge) // user_1 is an instance of User => static property "maxAge" not available
console.log("User maxAge is ", User.maxAge); // User is a class in itself , So static attribute can be used
var admin = new Admin("Sumemr", "sumner");
admin.setEditor("Admini");
console.log(admin);
console.log("the editor for admin is ", admin.getEditor());
