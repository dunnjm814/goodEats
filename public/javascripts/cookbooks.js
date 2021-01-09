window.addEventListener("DOMContentLoaded", event => {

    const createButton = document.getElementById("create-cookbook-button");
    // const navBar = document.getElementById('navBar');
    const form = document.getElementById('cookbook-form-holder');
    const cookBookFlex = document.getElementById('cookbook-flex')

    createButton.addEventListener('click', event => {

        if (form.classList.contains('hidden')) {
            // form.classList.add('cook-form-holder');
            form.classList.remove('hidden');
            form.classList.add('cookbook-form-holder');
            // cookBookFlex.classList.add('hidden');
            // navBar.classList.add('hidden');
        } else {
            // form.classList.remove('cook-form-holder');
            // cookBookFlex.classList.remove('hidden');
            // navBar.classList.remove('add');
            form.classList.add('hidden');
            form.classList.remove('cookbook-form-holder');
        }

    });

});