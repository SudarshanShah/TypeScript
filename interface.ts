interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    startTrail: () => string
    startTrailNow(): string
    getCoupon(couponname: string): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "Admin" | "Manager"
}

const sudarshan: User = {
    dbId: 22,
    email: "ss@ss.com",
    userId: 1109,
    githubToken: "github",

    startTrail: () => {
        return "Trial started"
    },

    startTrailNow: () => {
        return "Trail now"
    },

    getCoupon: (name: "ss09") => {
        return 10
    }
}
// allowed 
sudarshan.email = "ss@aa.com"
// not allowed
//sudarshan.dbId = 21


