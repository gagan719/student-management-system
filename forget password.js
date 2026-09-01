
// ==========================================
// STUDENT MANAGEMENT SYSTEM
// FORGOT PASSWORD JAVASCRIPT
// ==========================================


// Get email input
const emailInput = document.getElementById("email");


// ==========================================
// EMAIL VALIDATION FUNCTION
// ==========================================

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


// ==========================================
// FORGOT PASSWORD FUNCTION
// ==========================================

function forgotPassword() {

    // Get email value
    const email = emailInput.value.trim();


    // ======================================
    // CHECK EMPTY EMAIL
    // ======================================

    if (email === "") {

        alert("Please enter your email address.");

        emailInput.focus();

        return;
    }


    // ======================================
    // CHECK EMAIL FORMAT
    // ======================================

    if (!validateEmail(email)) {

        alert("Please enter a valid email address.");

        emailInput.focus();

        return;
    }


    // ======================================
    // SUCCESS MESSAGE
    // ======================================

    alert(
        "Password reset instructions have been sent to:\n" +
        email
    );


    // ======================================
    // CLEAR INPUT
    // ======================================

    emailInput.value = "";

}

