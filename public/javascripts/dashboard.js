window.addEventListener('DOMContentLoaded', (event) => {
    const cookBookIcon = document.getElementById('open-book')
    const logOutIcon = document.getElementById('logout-user-button')

    cookBookIcon.addEventListener('click', (event) => {
        window.location.href = "http://localhost:8080/cookbooks"
    })
    
})