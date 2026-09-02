
// ==========================================
// STUDENT MANAGEMENT SYSTEM
// Registration Page JavaScript
// ==========================================


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const form = document.querySelector(".container form");

const fullName = document.querySelector(
    'input[placeholder="Full Name"]'
);

const email = document.querySelector(
    'input[placeholder="Email"]'
);

const studentId = document.querySelector(
    'input[placeholder="Student ID"]'
);

const department = document.querySelector(
    'input[placeholder="Department"]'
);

const password = document.querySelector(
    'input[placeholder="Password"]'
);

const confirmPassword = document.querySelector(
    'input[placeholder="Confirm Password"]'
);

const eye = document.getElementById("eye");

const confirmEye = document.getElementById("confirmEye");


// ==========================================
// EMAIL VALIDATION
// ==========================================

function validateEmail(emailValue) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(emailValue);
}


// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

eye.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    }

});


// ==========================================
// CONFIRM PASSWORD SHOW / HIDE
// ==========================================

confirmEye.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";

        confirmEye.classList.remove("fa-eye");
        confirmEye.classList.add("fa-eye-slash");

    } else {

        confirmPassword.type = "password";

        confirmEye.classList.remove("fa-eye-slash");
        confirmEye.classList.add("fa-eye");

    }

});


// ==========================================
// FORM SUBMISSION
// ==========================================

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const studentIdValue = studentId.value.trim();
    const departmentValue = department.value.trim();
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    // ======================================
    // VALIDATION
    // ======================================

    // Full Name
    if (nameValue === "") {

        alert("Please enter your full name.");

        fullName.focus();

        return;
    }


    // Full Name minimum length
    if (nameValue.length < 3) {

        alert("Full name must contain at least 3 characters.");

        fullName.focus();

        return;
    }


    // Email
    if (emailValue === "") {

        alert("Please enter your email address.");

        email.focus();

        return;
    }


    // Email format
    if (!validateEmail(emailValue)) {

        alert("Please enter a valid email address.");

        email.focus();

        return;
    }


    // Student ID
    if (studentIdValue === "") {

        alert("Please enter your Student ID.");

        studentId.focus();

        return;
    }


    // Department
    if (departmentValue === "") {

        alert("Please enter your department.");

        department.focus();

        return;
    }


    // Password
    if (passwordValue === "") {

        alert("Please enter a password.");

        password.focus();

        return;
    }


    // Password length
    if (passwordValue.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        password.focus();

        return;
    }


    // Confirm Password
    if (confirmPasswordValue === "") {

        alert("Please confirm your password.");

        confirmPassword.focus();

        return;
    }


    // Password matching
    if (passwordValue !== confirmPasswordValue) {

        alert("Passwords do not match.");

        confirmPassword.focus();

        return;
    }


    // ======================================
    // REGISTRATION SUCCESS
    // ======================================

    alert(
        "Registration successful!\n\n" +
        "Welcome, " + nameValue + "!"
    );


    // ======================================
    // DISPLAY DETAILS IN CONSOLE
    // ======================================

    console.log("===== Student Registration =====");

    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Student ID:", studentIdValue);
    console.log("Department:", departmentValue);


    // ======================================
    // CLEAR FORM
    // ======================================

    form.reset();


    // Reset password icons
    password.type = "password";
    confirmPassword.type = "password";

    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");

    confirmEye.classList.remove("fa-eye-slash");
    confirmEye.classList.add("fa-eye");

});


// ==========================================
// REAL-TIME PASSWORD MATCH CHECK
// ==========================================

confirmPassword.addEventListener(
    "input",
    function () {

        if (
            confirmPassword.value !== "" &&
            password.value !== confirmPassword.value
        ) {

            confirmPassword.style.borderColor =
                "#dc2626";

        } else if (
            confirmPassword.value !== ""
        ) {

            confirmPassword.style.borderColor =
                "#22c55e";

        } else {

            confirmPassword.style.borderColor = "";

        }

    }
);


// ==========================================
// PASSWORD STRENGTH CHECK
// ==========================================

password.addEventListener(
    "input",
    function () {

        if (password.value.length === 0) {

            password.style.borderColor = "";

        } else if (password.value.length < 6) {

            password.style.borderColor =
                "#dc2626";

        } else {

            password.style.borderColor =
                "#22c55e";

        }

    }
);


// ==========================================
// EMAIL REAL-TIME CHECK
// ==========================================

email.addEventListener(
    "input",
    function () {

        if (email.value === "") {

            email.style.borderColor = "";

        } else if (
            validateEmail(email.value.trim())
        ) {

            email.style.borderColor =
                "#22c55e";

        } else {

            email.style.borderColor =
                "#dc2626";

        }

    }
);

