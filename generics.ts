
//T by defaulrt must be an object, not string, bool or number
const addID = <T extends object>(obj:T) => {
    const id = Math.random().toString(16)
    return{
        ...obj,
        id
    }
}

interface UserI<T> {
    name: string
    data: T
}

interface UserII<T,V>{
    name: string;
    data: T;
    meta: V;
}

const user_ : UserI<{meta: string}> = {
    name: "Jack",
    data: {
        meta: "foo"
    } 
}

const user2_ :UserI<string[]> ={
    name : "John",
    data : ["foo", "bar"]
}

const user3_ :UserII<{meta: string}, string> = {
    name: "Jim",
    data: {
        meta: "Something"
    },
    meta: "something else"
}

var result = addID(user_)
console.log("result", result);  
var result2 = addID(user2_)
console.log("result2", result2);   
var result3 = addID(user3_)
console.log("result3 " , result3)