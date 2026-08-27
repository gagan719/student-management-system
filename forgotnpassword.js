export function forgotPassword() {

    const email = document.getElementById("email").value;

    if (email === "") {

        alert("Please enter your email.");

    } else {

        alert("Password reset link has been sent to " + email);

        window.location.href = "student management.html";
    }
}