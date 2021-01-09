window.addEventListener("DOMContentLoaded", event => {

    const createButton = document.getElementById("create-cookbook-button");
    const logoutButton = document.getElementById("logout-button")
    const cookbookForm = document.getElementById('cookbook-form-holder');
    const logoutForm = document.getElementById('logout-form-holder');
    const cookBookFlex = document.getElementById('cookbook-flex')

    createButton.addEventListener('click', event => {

        if (!logoutForm.classList.contains('hidden')) {
            logoutForm.classList.add('hidden');
            logoutForm.classList.remove('logout-form-holder');
        }

        if (cookbookForm.classList.contains('hidden')) {
            cookbookForm.classList.remove('hidden');
            cookbookForm.classList.add('cookbook-form-holder');
        } else {
            cookbookForm.classList.add('hidden');
            cookbookForm.classList.remove('cookbook-form-holder');
        }

    });

    logoutButton.addEventListener('click', event => {

        if (!cookbookForm.classList.contains('hidden')) {
            cookbookForm.classList.add('hidden');
            cookbookForm.classList.remove('cookbook-form-holder');
        }

        if (logoutForm.classList.contains('hidden')) {
            logoutForm.classList.remove('hidden');
            logoutForm.classList.add('logout-form-holder');
        } else {
            logoutForm.classList.add('hidden');
            logoutForm.classList.remove('logout-form-holder');
        }

    });

});