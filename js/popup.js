let login = document.querySelector('.login')
let loginPopUp = document.querySelector('.login-popup')

console.log(login)
console.log(loginPopUp)

login.addEventListener('click', showPopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup')

};