import { login } from "./login.js";
import { setupPasswordToggle } from "./password.js";
import { forgotPassword } from "./forgotPassword.js";

// Make functions available to HTML
window.login = login;
window.forgotPassword = forgotPassword;

// Start password eye button
setupPasswordToggle();