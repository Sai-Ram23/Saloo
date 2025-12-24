const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const  registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () =>{
    logregBox.classList.add('active');
})

loginLink.addEventListener('click', () =>{
    logregBox.classList.remove('active');
})

document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector('.form-box.login form');
    const emailInput = signInForm.querySelector('input[type="email"]');
    const passwordInput = signInForm.querySelector('input[type="password"]');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if email and password are entered
        if (emailInput.value.trim() === ' ' && passwordInput.value.trim() === ' ') {
            alert('Please enter both email and password.');
        }

        // Redirect to the home page if details are entered
        window.location.href = 'index.html';
        alert("Sign In Successful.");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.form-box.register form');
    const signUpNameInput = signUpForm.querySelector('input[type="text"]');
    const signUpEmailInput = signUpForm.querySelector('input[type="email"]');
    const signUpPasswordInput = signUpForm.querySelector('input[type="password"]');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if name, email, and password are entered
        if (signUpNameInput.value.trim() === ' ' && signUpEmailInput.value.trim() === ' ' && signUpPasswordInput.value.trim() === ' ') {
            alert('Please enter name, email, and password.');
        }
        // Redirect to the next page if details are entered
        window.location.href = 'index.html';
    });
});