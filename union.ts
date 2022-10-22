// Union "|"

type ID = string; // just a simple type alias
type PopularTag = "popular" | "semipopular" | "famous" | "icon" | "soso" ;
type MaybePopularTag = null | PopularTag

interface IUserName {
    id: ID,
    name: string,
    surname: string
    popularity: MaybePopularTag
}


let username: string = "ALEX";
let page: string | number = "1";

let errorMessage: string | null = null;

let user1 : null|IUserName = null; //null is the defazult value until a IUserName object is given to the variable

var sudip : IUserName = {
    id: "1234",
    name: "Sudip",
    surname: "Gurung",
    popularity: null
}
console.log(sudip)

