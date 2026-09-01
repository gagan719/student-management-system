// login.js

import { validateEmail, clearErrors } from "./validation.js";
import { showPassword } from "./password.js";


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const loginForm = document.getElementById("loginForm");

const role = document.getElementById("role");
const email = document.getElementById("email");
const password = document.getElementById("password");

const roleError = document.getElementById("roleError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const message = document.getElementById("message");

const showPasswordBtn =
    document.getElementById("showPasswordBtn");


// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

showPasswordBtn.addEventListener("click", showPassword);


// ==========================================
// LOGIN FORM
// ==========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors(
        roleError,
        emailError,
        passwordError,
        message,
        role,
        email,
        password
    );

    let isValid = true;


    // ======================================
    // ROLE VALIDATION
    // ======================================

    if (role.value === "") {

        roleError.textContent =
            "Please select your role.";

        role.style.borderColor = "#dc2626";

        isValid = false;

    } else {

        role.style.borderColor = "#22c55e";
    }


    // ======================================
    // EMAIL VALIDATION
    // ======================================

    const emailValue = email.value.trim();

    if (emailValue === "") {

        emailError.textContent =
            "Email address is required.";

        email.style.borderColor = "#dc2626";

        isValid = false;

    } else if (!validateEmail(emailValue)) {

        emailError.textContent =
            "Please enter a valid email address.";

        email.style.borderColor = "#dc2626";

        isValid = false;

    } else {

        email.style.borderColor = "#22c55e";
    }


    // ======================================
    // PASSWORD VALIDATION
    // ======================================

    const passwordValue = password.value;

    if (passwordValue === "") {

        passwordError.textContent =
            "Password is required.";

        password.style.borderColor = "#dc2626";

        isValid = false;

    } else if (passwordValue.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        password.style.borderColor = "#dc2626";

        isValid = false;

    } else {

        password.style.borderColor = "#22c55e";
    }


    // ======================================
    // STOP IF INVALID
    // ======================================

    if (!isValid) {
        return;
    }


    // ======================================
    // LOGIN SUCCESS
    // ======================================

    const selectedRole = role.value;

    console.log("Role:", selectedRole);
    console.log("Email:", emailValue);

    message.textContent =
        "Login successful! Welcome to the Student Management System.";

    message.style.color = "#16a34a";


    // ======================================
    // ROLE MESSAGE
    // ======================================

    setTimeout(function () {

        if (selectedRole === "student") {

            message.textContent =
                "Student login successful!";

        } else if (selectedRole === "faculty") {

            message.textContent =
                "Faculty login successful!";

        } else if (selectedRole === "admin") {

            message.textContent =
                "Admin login successful!";

        }

    }, 1000);

});


// ==========================================
// FORGOT PASSWORD
// ==========================================

const forgotPasswordLink =
    document.querySelector(".options a");

forgotPasswordLink.addEventListener("click", function (event) {

    event.preventDefault();

    const emailValue = email.value.trim();


    if (emailValue === "") {

        message.textContent =
            "Please enter your email address first.";

        message.style.color = "#dc2626";

        email.focus();

        return;
    }


    if (!validateEmail(emailValue)) {

        message.textContent =
            "Please enter a valid email address.";

        message.style.color = "#dc2626";

        email.focus();

        return;
    }


    message.textContent =
        "Password reset instructions have been sent to your email.";

    message.style.color = "#2563eb";

});


// ==========================================
// REAL-TIME EMAIL VALIDATION
// ==========================================

email.addEventListener("input", function () {

    emailError.textContent = "";

    email.style.borderColor = "";

});


// ==========================================
// REAL-TIME PASSWORD VALIDATION
// ==========================================

password.addEventListener("input", function () {

    passwordError.textContent = "";

    password.style.borderColor = "";

});


// ==========================================
// ROLE ERROR REMOVAL
// ==========================================

role.addEventListener("change", function () {

    roleError.textContent = "";

    role.style.borderColor = "";

});


// ==========================================
// ENTER KEY - EMAIL
// ==========================================

email.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        password.focus();

    }

});


// ==========================================
// ENTER KEY - PASSWORD
// ==========================================

password.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        loginForm.requestSubmit();

    }

});