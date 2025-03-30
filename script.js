function openPopup(imgElement) {
    document.getElementById('popup-img').src = imgElement.src;
    document.getElementById('popup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}