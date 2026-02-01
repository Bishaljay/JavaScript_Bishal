// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// ================= Functions & Scope =================

function one() {
    const username = "bishal"

    function two() {
        const website = "medium"
        console.log(username)
    }

    two()
}

// one()


if (true) {
    const username = "bishal"
    if (username === "bishal") {
        const website = " medium"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}


// ✅ Function expression must be defined BEFORE use
const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5))