function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPresent: boolean) {

}

let loginUser = (name: string, email: string, isPresent: boolean = false) => {}

addTwo(5);
getUpper("Sudarshan");
signUpUser("sudarshan", "sudarshan@gmail.com", true);
loginUser("stark", "stark@gmail.com");


function getValue(myVal: number): boolean {
    if(myVal > 5) {
        return true;
    }
    return false;
}

const getHello = (s: string): string => {
    return "";
}

const heros = ["ironman", "superman", "spiderman"];

heros.map((hero): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// use 'never'as return type when throwing error, 
// rather than using 'void'
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}