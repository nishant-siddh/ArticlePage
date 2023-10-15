const openModal = document.querySelector('[data-open-modal]')
const openLoginModal = document.querySelector('#openLoginModal')
const closeModal = document.querySelector('[data-close-modal]')
const closeLoginModal = document.querySelector('[data-close-loginModal]')
const modal = document.querySelector('.signup_modal')
const loginModal = document.querySelector('.login_modal')
const signIn = document.querySelector('#signIn')
const createAccount = document.querySelector('#createAccount')

openModal.addEventListener('click', () => {
    modal.showModal();
})

function close(e) {
    e.preventDefault();
    console.log(closeModal);
    modal.close();
}

signIn.addEventListener('click', () => {
    modal.close();
    loginModal.showModal();
})

createAccount.addEventListener('click', () => {
    loginModal.close();
    modal.showModal();
})

openLoginModal.addEventListener('click', () => {
    loginModal.showModal();
})

closeModal.addEventListener('click', () => {
    // console.log("closed");
    modal.close();
    // close(e);
})

closeLoginModal.addEventListener('click', () => {
    console.log("closed login");
    loginModal.close();
})