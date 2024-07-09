const passwordDiv = document.querySelector("#pw-field");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirm-password");

// Compare password field with confirmation field to see if they match
function comparePasswords(pw1, pw2) {
    // get element with selected id, and append/remove it dynamically
    let message = document.querySelector("#pw-warning");

    if (pw1 != pw2 && message == null) {
        let message = document.createElement("p");
        message.textContent = "* Passwords do not match";
        message.style.margin = 0;
        message.style.color = "red";
        message.id = "pw-warning";

        passwordDiv.appendChild(message);
        password.style.borderColor = "red";
        confirmation.style.borderColor = "red";
    } else if (pw1 == pw2 && message != null) {
        passwordDiv.removeChild(message);
        password.style.borderColor = "";
        confirmation.style.borderColor = "";
    }
}

password.addEventListener("change", () => {
    comparePasswords(password.value, confirmation.value)
});

confirmation.addEventListener("change", () => {
    comparePasswords(password.value, confirmation.value)
});