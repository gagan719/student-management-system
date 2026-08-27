export function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "admin" && password === "password") {

        message.style.color = "green";
        message.textContent = "Login successful!";

        // Go to home page
        window.location.href = "home.html";

    } else {

        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}