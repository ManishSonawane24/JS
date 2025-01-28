function addTwoNumbers(a, b) {
    console.log(a + b);
}

// addTwoNumbers(10, 20);

function login(username = "Guest", password = "password") {
    if (username === undefined || password === undefined) {
        return `Please enter username and password`;    
        
    }
    return `Welcome ${username} just logged in`;
}

function cartPrices(...prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}

const user = {
    username: "manish",
    price: 199
};

function checkout(anyobj) {
    return `Hi ${anyobj.username}, your total is ${anyobj.price}`;
}

checkout({
    username: "manish",
    price: 299
});
// console.log(checkout(user));