

export function validateEmail(emailValue) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailValue);
}

export function clearErrors(
    roleError,
    emailError,
    passwordError,
    message,
    role,
    email,
    password
) {
    roleError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";

    role.style.borderColor = "";
    email.style.borderColor = "";
    password.style.borderColor = "";
}