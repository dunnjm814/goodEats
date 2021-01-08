window.addEventListener('DOMContentLoaded', (event) => {
    const reviewForm = document.querySelector('.review__form');
    const displayFormButton = document.getElementById('displayReviewButton')
    const submitFormButton = document.getElementById('review__form--submit')
    const reviewFormContent = document.getElementById("reviewForm");


    displayFormButton.addEventListener('click', (event) => {
        reviewForm.classList.remove('hidden')

    })

    submitFormButton.addEventListener('click', async (event) => {

        event.preventDefault()

        let recipeId = document.getElementById('recipeId');

        const form = new FormData(reviewFormContent);
        const revContent = form.get('revContent');
        const rating = form.get('rating');

        const res = await fetch(`/api/recipes/${recipeId.value}/review`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ revContent, rating }),
        });
        const data = await res.json()

        // create elements
        const userSpan = document.createElement('span')
        const rateSpan = document.createElement('span')
        const pRevContent = document.createElement('p')

        // set innertext of new elements to text nodes
        userSpan.innerText = data.userName
        rateSpan.innerText = data.review.rating
        pRevContent.innerText = data.review.revContent

        // create new div to house elements set w/ text nodes and query for reviews
        const newReviewDiv = document.createElement('div')
        const reviews = document.querySelector('.recipe__review');

        // append elements to div housing review post content
        newReviewDiv.appendChild(userSpan)
        newReviewDiv.appendChild(rateSpan)
        newReviewDiv.appendChild(pRevContent)

        // append newReviewDiv container to reviews
        reviews.appendChild(newReviewDiv)

        // update avgRating on page
        const avgRatingDisplay = document.querySelector('.recipeRating')
        const newAvgRating = data.finalAvg
        avgRatingDisplay.innerText = newAvgRating

        reviewForm.classList.add('hidden')

    })

})
