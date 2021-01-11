window.addEventListener('DOMContentLoaded', (event) => {

    const reviewForm = document.querySelector('.review__form');
    const displayFormButton = document.getElementById('displayReviewButton')
    const submitFormButton = document.getElementById('review__form--submit')
    const reviewFormContent = document.getElementById("reviewForm");

    displayFormButton.addEventListener('click', (event) => {
        reviewForm.classList.remove('hidden')
    })
    let recipeId = document.getElementById('recipeId');
    submitFormButton.addEventListener('click', async(event) => {
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
        userSpan.classList.add("userName_and_rating");
        const starSpan = document.createElement('span')
        starSpan.setAttribute("id", "the-stars");
        const pRevContent = document.createElement('p')
        pRevContent.setAttribute("id", "review__content");
        // set innertext of new elements to text nodes
        userSpan.innerText = `${data.userName} ${data.review.rating}`;
        const nameRateStarsDiv = document.createElement('div')
        nameRateStarsDiv.classList.add("reviewContent__name--andRating");
        let n = data.review.rating;
        while (n > 0) {

            let star = document.createElement('img')
            let starImg = star.src = "../images/star-icon.png";
            starSpan.innerHTML = starImg
            rateSpan.appendChild(starSpan)
            n--
        }
        pRevContent.innerText = data.review.revContent
            // create new div to house elements set w/ text nodes and query for reviews
        const contentDiv = document.createElement('div')
        contentDiv.classList.add(".recipe__review--content");
        contentDiv.classList.add(".reviewContent__the--content");
        const reviews = document.querySelector('.recipe__review');
        // append elements to div housing review post content
        newReviewDiv.appendChild(userSpan)
        newReviewDiv.appendChild(rateSpan)
        contentDiv.appendChild(pRevContent)
            // houses nameRateStarsDiv (userName, numeric rating, and stars), and content div (review)
        const reviewCard = document.createElement('div')
        reviewCard.classList.add("recipe__review--content");
        reviewCard.appendChild(newReviewDiv)
        reviewCard.appendChild(contentDiv)
            // append nameRateStarsDiv container to reviews
        reviews.appendChild(reviewCard)
            // update avgRating on page
        const avgRatingDisplay = document.querySelector('.recipeRating')
        const newAvgRating = data.finalAvg
        avgRatingDisplay.innerText = newAvgRating
        reviewForm.classList.add('hidden')
    })

    const deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(deleteButton => {

        deleteButton.addEventListener('click', async(e) => {
            e.preventDefault();
            let reviewTarget = parseInt(`${e.target.id}`, 10)
            const res = await fetch(`/api/reviews/${reviewTarget}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            const deleteReview = await res.json()
            console.log(deleteReview)
            const container = document.querySelector('.recipe__review')
            const deletedReview = document.getElementById(
                `reviewContainer${deleteReview.reviewId}`
            );
            console.log(deletedReview)
            console.log(container)
            container.removeChild(deletedReview)
        })
        const deleteReview = await res.json()
        console.log(deleteReview)
        const container = document.querySelector('recipe__review')
        const deletedReview = document.getElementById(`reviewContainer${deleteReview.id}`)
        container.removeChild(deletedReview)

    })

    const addToCookBookForm = document.querySelector(".recipe__cookBook--button");
    addToCookBookForm.addEventListener('click', e => {
            e.preventDefault();
            const addToCookBookForm = document.querySelector(".addToCookbook__form");
            addToCookBookForm.classList.remove('hidden')
        })
        // const addToCookBook = document.getElementById("submitToCookBook");
})