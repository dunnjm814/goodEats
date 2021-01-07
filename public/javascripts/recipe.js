window.addEventListener('DOMContentLoaded', (event) => {
    const reviewForm = document.getElementById('reviewForm');
    const displayFormButton = document.getElementById('displayReviewButton')
    const submitFormButton = document.getElementById('review__form--submit')
    reviewForm.classList.add('hidden')

    displayFormButton.addEventListener('click', (event) => {
        reviewForm.classList.remove('hidden')

    })

    submitFormButton.addEventListener('click', (event) => {
        event.preventDefault()
        reviewForm.classList.add('hidden')
    })

})
