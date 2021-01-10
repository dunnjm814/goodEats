window.addEventListener('DOMContentLoaded', (event) => {

    const reviewForm = document.querySelector('.review__form');
    const displayFormButton = document.getElementById('displayReviewButton')
    const submitFormButton = document.getElementById('review__form--submit')
    const reviewFormContent = document.getElementById("reviewForm");

    displayFormButton.addEventListener('click', (event) => {
        reviewForm.classList.remove('hidden')
    })
    let recipeId = document.getElementById('recipeId');
    submitFormButton.addEventListener('click', async (event) => {


        event.preventDefault()

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
            let starImg = star.src = "../images/star-icon.png";
            starSpan.innerHTML = starImg
            rateSpan.appendChild(starSpan)
            n--
        }

        pRevContent.innerText = data.review.revContent
        rateSpan.classList.add("list-stars");

        // create new div to house elements set w/ text nodes and query for reviews
        const newReviewDiv = document.createElement('div')
        newReviewDiv.classList.add("reviewContent__name--andRating");
        const contentDiv = document.createElement('div')
        contentDiv.classList.add(".recipe__review--content");
        contentDiv.classList.add(".reviewContent__the--content");
        const reviews = document.querySelector('.recipe__review');

        // append elements to div housing review post content
        newReviewDiv.appendChild(userSpan)
        newReviewDiv.appendChild(rateSpan)
        contentDiv.appendChild(pRevContent)

        // houses newReviewDiv (userName, numeric rating, and stars), and content div (review)
        const reviewCard = document.createElement('div')
        reviewCard.classList.add("recipe__review--content");
        reviewCard.appendChild(newReviewDiv)
        reviewCard.appendChild(contentDiv)

        // append newReviewDiv container to reviews
        reviews.appendChild(reviewCard)


        // update avgRating on page
        const avgRatingDisplay = document.querySelector('.recipeRating')
        const newAvgRating = data.finalAvg
        avgRatingDisplay.innerText = newAvgRating



        reviewForm.classList.add('hidden')

    })

    const deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(deleteButton => {

        deleteButton.addEventListener('click', async (e) => {
            e.preventDefault();
            let reviewTarget = parseInt(`${e.target.id}`, 10)
            console.log(reviewTarget)
            const res = await fetch(`/api/reviews/${reviewTarget}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            })
            const deleteReview = await res.json()
            console.log(deleteReview)
            const container = document.querySelector('recipe__review')
            const deletedReview = document.getElementById(`reviewContainer${deleteReview.reviewId}`)
            container.removeChild(deletedReview)
        })

    })

})
