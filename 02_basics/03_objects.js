// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Bishal",
    "full name": "Bishal Jaysawal",
    [mySym]: "mykey1",
    age: 18,
    location: "Bhubaneswar",
    email: "bishal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "bishal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "bishal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());