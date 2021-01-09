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
        const starSpan = document.createElement('span')
        const pRevContent = document.createElement('p')
        const rateSpan = document.createElement('span')
        // set innertext of new elements to text nodes
        userSpan.innerText = `${data.userName} ${data.review.rating}`;
        let n = data.review.rating;
        while (n > 0) {

            let star = document.createElement('img')
            let starImg = star.src="../images/star-icon.png" ;
            starSpan.innerHTML = starImg
            rateSpan.appendChild(starSpan)
            n--
        }

        pRevContent.innerText = data.review.revContent
        rateSpan.classList.add("list-stars");

        // create new div to house elements set w/ text nodes and query for reviews
        const newReviewDiv = document.createElement('div')
        const contentDiv = document.createElement('div')
        const reviews = document.querySelector('.recipe__review');

        // append elements to div housing review post content
        newReviewDiv.appendChild(userSpan)
        newReviewDiv.appendChild(rateSpan)
        newReviewDiv.classList.add("reviewContent__name--andRating");
        contentDiv.appendChild(pRevContent)
        contentDiv.classList.add(".reviewContent__the--content");

        // houses newReviewDiv (userName, numeric rating, and stars), and content div (review)
        const reviewCard = document.createElement('div')
        reviewCard.appendChild(newReviewDiv)
        reviewCard.appendChild(contentDiv)
        reviewCard.classList.add("recipe__review--content");

        // append newReviewDiv container to reviews
        reviews.appendChild(reviewCard)


        // update avgRating on page
        const avgRatingDisplay = document.querySelector('.recipeRating')
        const newAvgRating = data.finalAvg
        avgRatingDisplay.innerText = newAvgRating
        newReviewDiv.classList.add(".recipe__review--content");



        reviewForm.classList.add('hidden')

    })

})
