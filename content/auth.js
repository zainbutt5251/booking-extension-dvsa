// DOM elements
const loginScreen = document.getElementById('loginScreen');
const mainApp = document.getElementById('mainApp');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const loginMessage = document.getElementById('loginMessage');
const userEmailDisplay = document.getElementById('userEmailDisplay');
const logoutBtn = document.getElementById('logout-btn');

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();
});

// Check login status
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        loginScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
        userEmailDisplay.textContent = `Logged in as: ${user.email}`;
    } else {
        loginScreen.classList.remove('hidden');
        mainApp.classList.add('hidden');
    }
}

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        showLoginMessage('Please enter email and password.', 'error');
        return;
    }

    showLoginMessage('Logging in...', 'info');
    loginBtn.disabled = true;

    try {
        // Call real API
        const res = await fetch(
            "https://us-central1-booking-automation-fredocloud.cloudfunctions.net/loginExtensionUser",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            }
        );

        const data = await res.json();

        if (data.success) {
            // Store user info in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(data.user));

            showLoginMessage('Login successful!', 'success');

            setTimeout(() => {
                checkLoginStatus();
            }, 800);
        } else {
            showLoginMessage(data.error || 'Login failed', 'error');
        }
    } catch (err) {
        console.error(err);
        showLoginMessage('Network error', 'error');
    } finally {
        loginBtn.disabled = false;
    }
});

// Logout functionality
logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('loggedInUser');
        checkLoginStatus();
    }
});

// Show login messages
function showLoginMessage(text, type) {
    loginMessage.textContent = text;
    loginMessage.className = '';
    loginMessage.classList.add(type);
}
const onchangeb=document.getElementById("selecsearchbussiness")
onchangeb.addEventListener("change", function () {
  const searchval = this.value;
  alert("Selected value: " + searchval); // ✅ show alert
  localStorage.setItem("searchbussiness", searchval);
});
