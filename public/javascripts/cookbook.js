window.addEventListener("DOMContentLoaded", event => {

    const logoutButton = document.getElementById("logout-button");
    const logoutForm = document.getElementById('logout-form-holder');
    const noLogoutButton = document.getElementById('no-logout-button');

    logoutButton.addEventListener('click', event => {

        if (logoutForm.classList.contains('hidden')) {
            logoutForm.classList.remove('hidden');
            logoutForm.classList.add('logout-form-holder');
        } else {
            logoutForm.classList.add('hidden');
            logoutForm.classList.remove('logout-form-holder');
        }

    });

    noLogoutButton.addEventListener('click', event => {

        event.preventDefault();

        logoutForm.classList.add('hidden');
        logoutForm.classList.remove('logout-form-holder');

    });

});