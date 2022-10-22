const doSomething = (): void =>{
    console.log("doSomething")
}

doSomething();

//difference between any and unknown

let vAny: any = 10;
var vUnk: unknown = "10";

let s1: string = vAny;
// let s2: string = vUnk; // this throws an error because the type is unknown thus, might as well not be a string

// type assertion
let s2 : string = vUnk as string;

var pageNum : string = "1"
let numericPageNo : number = pageNum as unknown as number;
