
const DEMO_CREDENTIALS = {
    username: "263510799682",
    password: "Arpit@20"
};
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const usernameInput = document.getElementById("jiloginform-username");
    const passwordInput = document.getElementById("jiloginform-password");

    if (!form || !usernameInput || !passwordInput) return;

    // Create a message area under the form for feedback
    const msg = document.createElement("div");
    msg.id = "demo-login-msg";
    msg.style.marginTop = "10px";
    msg.style.fontWeight = "bold";
    form.appendChild(msg);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const enteredUser = usernameInput.value.trim();
        const enteredPass = passwordInput.value;

        // Basic client-side validation mirroring the real form's rules
        if (enteredUser.length !== 12 || !/^\d+$/.test(enteredUser)) {
            msg.style.color = "#c0392b";
            msg.textContent = "CUET Application Number must be exactly 12 digits.";
            return;
        }
        if (!enteredPass) {
            msg.style.color = "#c0392b";
            msg.textContent = "Password cannot be blank.";
            return;
        }

        if (enteredUser === DEMO_CREDENTIALS.username && enteredPass === DEMO_CREDENTIALS.password) {
            
            sessionStorage.setItem("demoLoggedIn", "true");
            setTimeout(function () {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            msg.style.color = "#c0392b";
            msg.textContent = "Invalid CUET Application Number or Password (demo check failed).";
        }
    });
});
