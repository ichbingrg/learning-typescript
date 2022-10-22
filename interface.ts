let hello : string = "world";
hello = "foo";

const getFullName = (name:string, ...names:string[]) : string =>{
    return "Your full name is " + [name, ...names].join(" "); 
}

//console.log("1. "+getFullName("Sudip","Gurung","Ghotane"));
//console.log("2. "+getFullName("Sushi"));

// creating object inside ts using interface
interface IUser  {
    name: string, 
    age : number,
    getMessage(): string
}

const getNameandAge = (user:IUser) :string=>{
    return user.name + " is "+ user.age + " years old \n"
}

const user : IUser = {
    name: "Sudip",
    age: 23,
    getMessage(){
        return "hello " + this.name;
    }
}
const user2 : IUser = {
    name: "Shjkads",
    age: 23,
    getMessage(){
        return "hello " + this.name;
    }
}

//console.log("3. "+getNameandAge(user));
//console.log("4. " + user.getMessage())

