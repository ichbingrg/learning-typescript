
interface UserInterface{
    getFullName():string;
}


class User implements UserInterface{
    private firstname: string
    private lastname : string
    readonly unchangablename: string
    static readonly maxAge = 50; //static property is only accessible in the class and not in their instances

    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.unchangablename = firstname.concat(lastname);
        //console.log("A new user has been created : \n", this);
    }
    getFullName():string {
        return this.firstname + " " + this.lastname;
    }
}

class Admin extends User{
    private editor : string;

    setEditor(editor: string): void {
        this.editor = editor;
    }
    getEditor():string {
        return this.editor;
    }
}


const user_1 = new User("sudip", "gurung")
console.log(user_1.getFullName())

// console.log(user_1.maxAge) // user_1 is an instance of User => static property "maxAge" not available
console.log("User maxAge is ",User.maxAge) // User is a class in itself , So static attribute can be used

const admin = new Admin("Sumemr", "sumner")
admin.setEditor("Admini")
console.log(admin)
console.log("the editor for admin is ", admin.getEditor())