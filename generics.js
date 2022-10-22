var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//T by defaulrt must be an object, not string, bool or number
var addID = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user_ = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
var user2_ = {
    name: "John",
    data: ["foo", "bar"]
};
var user3_ = {
    name: "Jim",
    data: {
        meta: "Something"
    },
    meta: "something else"
};
var result = addID(user_);
console.log("result", result);
var result2 = addID(user2_);
console.log("result2", result2);
var result3 = addID(user3_);
console.log("result3 ", result3);
