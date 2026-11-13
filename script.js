//Customar Information //

let customarName = "Ali";
console.log(customarName);
console.log(typeof customarName);

let customarAge = 20;
console.log(customarAge);
console.log(typeof customarAge);

const availableBalance = "100$";
console.log(availableBalance);
console.log(typeof availableBalance);


// Resturant Menu //

console.log("1. Burger 10$");
console.log("2. Pizza 15$");
console.log("3. Sandwich 8$");
console.log("4. Pasta 12$");
console.log("5. Exit 0$");


// Food Items Using Switch //

let choice = 2;

switch (choice){
    case choice = 1:
        console.log("You selected Burger. Price: 10$"); break

    case choice = 2:
        console.log("You selected Pizza. Price: 15$"); break

    case choice = 3:
        console.log("You selected Sandwich. Price: 8$"); break

    case choice = 4:
        console.log("You selected Pasta. Price: 12$"); break

    case choice = 5:
        console.log("Thanks for visiting!"); break

    default:
        console.log("Invaled selection!");
}


// Calculation of the Total Price //

let foodPrice = 15;
let quantity = 2;
price = foodPrice * quantity;
console.log("Price:" + " " + price + "$");


let additionalChoice = 3 * 8;
console.log("Additonal Coast:" + " " + additionalChoice + "$");

totalPrice = price + additionalChoice;
console.log("Total price: " + totalPrice + "$")

remainingPrice = 100 - totalPrice;
console.log("Remaining Balance:" + " "  + remainingPrice + "$");

// Comparison Operators //

console.log(customarAge >= 18);
console.log(availableBalance == 200);
console.log(quantity > 1);
console.log(totalPrice == 0);
console.log(remainingPrice >= 0);


// Applying Conditional Statments //


if (customarAge < 18){
    console.log("You are underage.");
}
else if (availableBalance < totalPrice ){
    console.log("Insufficient balance!");
}
else {
    console.log("Your order has been placed successfully!")
};


// Challenge: Applying Switch for payment method //

let paymentMethod = "Credit Card";

switch (paymentMethod){
    case "cash":
        console.log("Visit us in our Physical Address!"); break

    case "Credit Card":
        console.log("Please transfer the payment to the +93(0)749053022 account number"); break

    case "bankTransfer":
        console.log("Please transfer to one of your closest national bank"); break

    default:
        console.log("Invalid payment method!");    
}


