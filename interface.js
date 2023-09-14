var sudarshan = {
    dbId: 22,
    email: "ss@ss.com",
    userId: 1109,
    githubToken: "github",
    startTrail: function () {
        return "Trial started";
    },
    startTrailNow: function () {
        return "Trail now";
    },
    getCoupon: function (name) {
        return 10;
    }
};
// allowed 
sudarshan.email = "ss@aa.com";
// not allowed
//sudarshan.dbId = 21
