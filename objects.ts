const user = {
    name: "Sudarshan",
    email: "sudarshan@mail.com",
    isActive: true
}

function createUser({name: string, isActive: boolean}) {}

createUser({name: "sudarshan", isActive: false})

let newUser = {name: "sudarshan", isActive: false, email: "sudarshan@mail.com"}
// this is odd behaviour of TS
createUser(newUser);

function createCourse(): {name: string, price: number} {
    return {name: "NextJS", price: 500};
}

// creating new type in TS
type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser1(user: User): User {
    return {name: "", email: "", isActive: true};
}

createUser1({name: "", email: "", isActive: true})

// readonly --> can't changed value of field, once assigned
// ? --> optional --> we can define the field or not, its upto us
type Users = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: Users = {
    _id: "1234",
    name: "ss",
    email: "ss@au.com",
    isActive: false
} 

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}