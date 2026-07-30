function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === "admin" && password === "password") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    }
    else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}

function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let togglePassword = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show Password";
    }

}

const password = document.getElementById("password");
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eye.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        password.type = "password";
        eye.classList.replace("fa-eye-slash", "fa-eye");
    }
});






function forgotPassword() {

    let email = document.getElementById("email").value;

    if(email === ""){
        alert("Please enter your email.");
    }
    else{
        alert("Password reset link has been sent to " + email);

        window.location.href = "student management.html";
    }
}
