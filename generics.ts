const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {
    return val
}


// NOT RECOMMENDED --> NEVER USE
function identityTwo(val: any): any {
    return val
}
 

function identityThree<Type>(val: Type): Type {
    return val
}


function identityFour<T>(val: T): T {
    return val
}


interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Milton", type: 2})

// if input value is Array type, 
// then return value must be one of the value from the Array
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}

// using generics in Arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}


interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

anotherFunction(3, {connection: "", username: "", password: ""})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}







