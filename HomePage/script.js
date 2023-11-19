var popup = document.querySelector("#loginpopup");

function showpopup() {
    popup.style.display = 'block';
}

function closepopup() {
    popup.style.display = 'none';
}

// popup.style.display = 'none';


window.addEventListener('load', showpopup);
