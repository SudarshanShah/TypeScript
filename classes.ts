class User {
    email: string
    name: string
    private readonly city: string = "Jodhpur"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

class UserBetterWay {
    // protected fields are accessible within the class and those classes which inherits this class
    protected _courseCount = 1
    readonly city: string = "Jodhpur"

    constructor(public email: string,
                public name: string) {
    }

    // private methods
    private deleteToken() {
        console.log("Token deleted");
        
    }

    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setter
    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends UserBetterWay {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const sudarshan = new User("ss@aa.com", "sudarshan")





