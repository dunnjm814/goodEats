window.addEventListener('DOMContentLoaded', (event) => {
    // form holder necessary?
    const formHolder = document.getElementById('formHolder');
    const signUpForm = document.getElementById('signupForm');
    const logInForm = document.getElementById('loginForm');
    const demoUserForm = document.getElementById('demoUserForm')

    const signUpButton = document.getElementById('signUpButton');
    const logInButton = document.getElementById('logInButton');
    const demoUserButton = document.getElementById('demoButton');

    signUpButton.addEventListener('click', (event) => {

        if(signUpForm.classList.contains('hidden')) {
            signUpForm.classList.remove('hidden');
            logInForm.classList.add('hidden');
            demoUserForm.classList.add('hidden');
        } else {
            signUpForm.classList.add('hidden');
        }
    })

    logInButton.addEventListener('click', (event) => {

        if(logInForm.classList.contains('hidden')) {
            logInForm.classList.remove('hidden');
            demoUserForm.classList.add('hidden');
            signUpForm.classList.add('hidden');
        } else {
            logInForm.classList.add('hidden');
        }
    })

    demoUserButton.addEventListener('click', (event) => {

        if(demoUserForm.classList.contains('hidden')) {
            demoUserForm.classList.remove('hidden');
            logInForm.classList.add('hidden');
            signUpForm.classList.add('hidden');
        } else {
            demoUserForm.classList.add('hidden');
        }
    })
})
