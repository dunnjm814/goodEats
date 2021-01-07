window.addEventListener('DOMContentLoaded', (event) => {
    const reviewForm = document.getElementById('reviewForm');
    const displayFormButton = document.getElementById('displayReviewButton')
    const submitFormButton = document.getElementById('review__form--submit')

    reviewForm.classList.add('hidden')


    displayFormButton.addEventListener('click', (event) => {
        reviewForm.classList.remove('hidden')

    })

    submitFormButton.addEventListener('click', async (event) => {
        event.preventDefault()
        let recipeId = document.getElementById('recipeId');
        const form = new FormData(reviewForm);
        const revContent = form.get('revContent');
        const rating = form.get('rating');
        const res = await fetch(`/api/recipes/${recipeId.value}/review`, {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ revContent, rating }),
        });
        const data = await res.json()
        //create text nodes
        const userNode = data.userName.createTextNode() //how to pull userId?
        const ratingNode = data.review.rating.createTextNode()
        const reviewContentNode = data.review.revContent.createTextNode()
        //create dom elements to house text nodes
        const userSpan = document.createElement('span')
        const rateSpan = document.createElement('span')
        const pRevContent = document.createElement('p')
        // set innertext of new elements to text nodes
        const userIdSpan = userSpan.innerText(userNode)
        const ratingSpan = rateSpan.innerText(ratingNode)
        const reviewContent = pRevContent.innerText(reviewContentNode)
        // create new div to house elements set w/ text nodes and query for reviews
        const newReviewDiv = document.createElement('div')
        const reviews = document.querySelector('recipe_review');

        newReviewDiv.appendChild(userIdSpan, ratingSpan, reviewContent)
        reviews.appendChild(newReviewDiv)

        reviewForm.classList.add('hidden')
        // Uncaught (in promise) TypeError: data.createTextNode is not a function
        // at HTMLButtonElement.<anonymous> (recipe.js:26). error display on page on submit review
    })

})
