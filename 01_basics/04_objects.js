// object declare with twotypes  ---1)literal and 2)constructor
//need to understand singleton in js
///when declare with literal type then no singleTon created and hen dedclare with constructor type then singleTon created 
//object.Create -> its object constructor

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "saba",
    "full name" : "saba langa",  //when you pass key as string then square nortation us the way to acces the value not using .full name 
    age: 18,
    [mySym]: "mykey1",  //when using mySym: "mykey1", mysum withour square bracket it wil give value as mykey1 but as a string not symbol but we want ans as a symbol type that's why [] it is imp 
    location: "Jaipur",
    email: "saba@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser ["email"])
console.log(JsUser["full name"])  //only allow sqaure notation not like .full name ... it is not allowed
console.log(JsUser[mySym]);

JsUser.email = "abdadyua@gmail.com"
Object.freeze(JsUser)  //freeze means lock value after freeze....if u try to modify anything then nothing is going to change
JsUser.email = "ayryy@gmail.com"
console.log(JsUser)

