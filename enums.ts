const statuses = {
    notStarted : "notStarted",
    inProgress : "inProgress",
    done :"Done"
}

console.log(statuses.done)

enum EnumStatus{
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "Done"
}

console.log(EnumStatus.InProgress) 

// enums can also be used as data types
let notStartedStatus: EnumStatus = EnumStatus.NotStarted;
// notStartedStatus = "foo" // this will result an error because Status cannot take a string "foo"
notStartedStatus = EnumStatus.Done;
console.log(notStartedStatus)

// using enums inside interface as it typically is used

interface Task{
    id : string;
    status : EnumStatus;
}