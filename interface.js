var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hello = "world";
hello = "foo";
var getFullName = function (name) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "Your full name is " + __spreadArray([name], names, true).join(" ");
};
var getNameandAge = function (user) {
    return user.name + " is " + user.age + " years old \n";
};
var user = {
    name: "Sudip",
    age: 23,
    getMessage: function () {
        return "hello " + this.name;
    }
};
var user2 = {
    name: "Shjkads",
    age: 23,
    getMessage: function () {
        return "hello " + this.name;
    }
};
//console.log("3. "+getNameandAge(user));
//console.log("4. " + user.getMessage())
