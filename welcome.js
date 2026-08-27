export function setupWelcome() {
    const welcomeBtn = document.querySelector("#welcomeBtn");

    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", () => {
            alert("Welcome to Student Management System!");
        });
    }
}