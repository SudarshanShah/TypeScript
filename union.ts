let score: number | string = 33

score = "This is fine"

type User = {
    name: string,
    id: number
}

type Admin = {
    adminname: string,
    id: number
}

let sudarshan: User | Admin = {name: "Sudarshan", id: 100}

sudarshan = {adminname: "ss", id: 110}


// array
const data: number[] = [1, 2, 3, 4, 5]
const data2: string[] = ["hello", "TypeScript"]
const data3: (string | number)[] = ["1", 2, 3]

// it means that, given variable can only have 
// either of the values given
let seat : "aisle" | "middle" | "window"

// not allowed
// seat = "upper"