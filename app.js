const shareMenu = document.getElementById('share-menu')
const shareButton = document.querySelector('button');

shareButton.addEventListener("click", () => {
    shareButton.classList.toggle('open')
    shareMenu.classList.toggle('open')
})