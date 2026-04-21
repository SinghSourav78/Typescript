let response:any = '42'

let numericLength: number = (response as string).length // this is known as forcedfull type insertion 

type Book = {
  name: string
}

let bookString = '{"name":"Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book; // this is known as type assertion

console.log(bookObject.name);


const inputElement = document.getElementById("username") as HTMLInputElement; // this is known as type assertion

// unknow v/s any

let value:any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase() // this will not throw an error at compile time but will throw an error at runtime


let newValue:unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
// newValue.toUpperCase() // this will throw an error at compile time because unknown type does not allow any operations without type assertion or type narrowing

if(typeof newValue === "string"){
  newValue.toUpperCase() // this will not throw an error at compile time because we have narrowed the type to string
}

try {
    
} catch (error:any) {
    console.log(error.message) // this will not throw an error at compile time but will throw an error at runtime if error is not of type Error
}

// or

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message) // this will not throw an error at compile time because we have narrowed the type to Error
    }

    console.log("Error",error) // this will not throw an error at compile time because we have not narrowed the type and it can be of any type
}


const data:unknown = "chai aur code"
const strData:string = data as string // this is known as type assertion

type Role = "admin" | "user" | "superadmin" 

// yehnn pr void ka mtlb ki mein care nae krta kya return hoga is function se, mein bas yeh batana chahta hu ki yeh function kuch bhi return nahi karega, aur agar mein is function ke andar return statement likh bhi du toh bhi koi error nahi aayega kyunki void type allow karta hai ki function kuch bhi return kare ya kuch bhi return na kare
function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard")
        return
    }

    role; 
}


function neverReturn(): never {
    while(true){
        console.log("This function will never return")
    }
}