const switchBtn = document.querySelector('.switch-mode-btn');

const body = document.querySelector('body');

const switchMode = () => {
    
    body.classList.toggle('body-bg-dark');

    switchBtn.classList.toggle('switch-mode-btn-dark');

    // Switch between light and dark-style classes for each element
    document.querySelector('.logo').classList.toggle('logo-dark');
    document.querySelector('.username').classList.toggle('username-dark');
    document.querySelector('.output-wrapper').classList.toggle('output-wrapper-dark');
    document.querySelector('.login').classList.toggle('login-dark');
    document.querySelector('.created-at').classList.toggle('created-at-dark');
    document.querySelector('.bio').classList.toggle('bio-dark');

    if (body.classList.contains('body-bg-dark')) {
        switchBtn.innerHTML = 'light <img src="assets/icon-sun.svg" alt="icon-sun" class="mode-icon">';
        
    } else {
        switchBtn.innerHTML = 'dark <img src="assets/icon-moon.svg" alt="icon-moon" class="mode-icon">';
    }

}

switchBtn.addEventListener('click',switchMode);