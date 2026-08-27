export function setupLogout() {
    const logoutBtn = document.querySelector("#logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            const confirmLogout = confirm(
                "Are you sure you want to logout?"
            );

            if (confirmLogout) {
                window.location.href = "login.html";
            }
        });
    }
}