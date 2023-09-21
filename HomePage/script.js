
function showPopup() {
    const loginPopup = document.getElementById('loginPopup');
        loginPopup.style.display = 'block';
    }


function closePopup() {
    const loginPopup = document.getElementById('loginPopup');
        loginPopup.style.display = 'none';
    }


window.onload = showPopup;

