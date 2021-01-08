window.addEventListener('DOMContentLoaded', (event) => {
    const cookBookIcon = document.getElementById('open-book')
    const logOutIcon = document.getElementById('logout-user-button')
    const recipeCard = document.querySelectorAll('card')
    

    cookBookIcon.addEventListener('click', (event) => {
        window.location.href = "http://localhost:8080/cookbooks"
    })

    // recipeCard.forEach(card => {
    //     card.addEventListener('click', event => {
    //         const recipeId = card.recipeId
    //         window.location.href = `http://localhost:8080/recipes/${recipeId}`
    //     })
    // })
    
    
})