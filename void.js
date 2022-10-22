var doSomething = function () {
    console.log("doSomething");
};
doSomething();
//difference between any and unknown
var vAny = 10;
var vUnk = "10";
var s1 = vAny;
// let s2: string = vUnk; // this throws an error because the type is unknown thus, might as well not be a string
// type assertion
var s2 = vUnk;
var pageNum = "1";
var numericPageNo = pageNum;
