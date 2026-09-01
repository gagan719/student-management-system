

export function showPassword() {

    const passwordInput = document.getElementById("password");
    const button = document.querySelector(".password button");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        button.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        button.textContent = "👁";

    }
}