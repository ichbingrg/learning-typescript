var statuses = {
    notStarted: "notStarted",
    inProgress: "inProgress",
    done: "Done"
};
console.log(statuses.done);
var EnumStatus;
(function (EnumStatus) {
    EnumStatus["NotStarted"] = "notStarted";
    EnumStatus["InProgress"] = "inProgress";
    EnumStatus["Done"] = "Done";
})(EnumStatus || (EnumStatus = {}));
console.log(EnumStatus.InProgress);
// enums can also be used as data types
var notStartedStatus = EnumStatus.NotStarted;
// notStartedStatus = "foo" // this will result an error because Status cannot take a string "foo"
notStartedStatus = EnumStatus.Done;
console.log(notStartedStatus);
