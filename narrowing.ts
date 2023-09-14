function detectType(val: number | string) {
    if(typeof val == "string") {
        return val.toLowerCase()
    }

    return val + 3
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return 
    }
    id.toLowerCase()
}

// ----------- 'in' Operator to narrow down type
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin) {
    // narrowing down type to Admin
    if("isAdmin" in account) {
        return account.isAdmin
    }
}


// ------------- 'instanceof' 
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString())
    }
    else {
        console.log(x.toLowerCase())
    }
}


type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
   return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}


// -------------- Discriminated Union

interface Circle {
    kind: "cicle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape) {
    if(shape.kind === "cicle") {
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
} 


function getArea(shape: Shape) {
    switch(shape.kind) {
        case "cicle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
            
        default:
            const _defaultForShape: never = shape
            return _defaultForShape   
    }
}



