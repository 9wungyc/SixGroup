document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginTab = document.querySelector('[data-tab="login"]');
    const loginForm = document.getElementById('login-form');
    const loginFooter = document.getElementById('login-footer');
    const errorAlert = document.getElementById('error-alert');
    const successAlert = document.getElementById('success-alert');

    // Show alert message
    function showAlert(alertElement, message) {
        alertElement.textContent = message;
        alertElement.style.display = 'block';
        setTimeout(() => {
            alertElement.style.display = 'none';
        }, 5000);
    }

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            showAlert(errorAlert, 'Please fill in all fields');
            return;
        }

        showAlert(successAlert, 'Login successful! Redirecting...');

        setTimeout(() => {
            window.location.href = 'Home.html'; // 👈
        }, 1500);
    });

    // Forgot password
    document.getElementById('forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        const email = prompt('Please enter your email address:');
        if (email) {
            showAlert(successAlert, 'Password reset instructions have been sent to your email.');
        }
    });

    
});