export { body, addClasses }

const body = document.querySelector('body');
const switchBtn = document.querySelector('.switch-mode-btn');
const outputWrapper = document.querySelector('.output-wrapper');
const logo = document.querySelector('.logo');
const username = document.querySelector('.username');

let mode = null;


window.onload = () => {

    mode = localStorage.getItem('modeType');

    if (mode === 'dark') {
        body.classList.add('body-bg-dark');
        switchBtn.classList.add('switch-mode-btn-dark');
        logo.classList.add('logo-dark');
        username.classList.add('username-dark');
        outputWrapper.classList.add('output-wrapper-dark');
        switchBtn.innerHTML = 'light <img src="assets/icon-sun.svg" alt="icon-sun" class="mode-icon">';
    } 

  
}

const addClasses = () => {
    document.querySelector('.login').classList.add('login-dark');
    document.querySelector('.created-at').classList.add('created-at-dark');
    document.querySelector('.bio').classList.add('bio-dark');
}

const toggleClasses = () => {

    body.classList.toggle('body-bg-dark') ;
    
    switchBtn.classList.toggle('switch-mode-btn-dark');

    logo.classList.toggle('logo-dark');
    username.classList.toggle('username-dark');
    outputWrapper.classList.toggle('output-wrapper-dark');

    document.querySelector('.login') ? document.querySelector('.login').classList.toggle('login-dark') : false;
    document.querySelector('.created-at') ? document.querySelector('.created-at').classList.toggle('created-at-dark') : false;
    document.querySelector('.bio') ? document.querySelector('.bio').classList.toggle('bio-dark') : false;
         
}


const switchMode = () => {

    toggleClasses();

    if (body.classList.contains('body-bg-dark')) {
        switchBtn.innerHTML = 'light <img src="assets/icon-sun.svg" alt="icon-sun" class="mode-icon">';
        mode = localStorage.setItem('modeType','dark');
    } else {
        switchBtn.innerHTML = 'dark <img src="assets/icon-moon.svg" alt="icon-moon" class="mode-icon">';
        mode = localStorage.setItem('modeType','default');
    }

}

switchBtn.addEventListener('click',switchMode);



