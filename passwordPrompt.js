let correctPassword = "Sub~Z3rO";

let userPassword;
do {
    userPassword = prompt("Please enter your password:");
    if (userPassword !== correctPassword) {
        alert("Invalid password, try again");
    }
} while (userPassword !== correctPassword);
alert("Welcome! You've entered the correct password.")
