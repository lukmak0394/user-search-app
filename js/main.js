const switchBtn = document.querySelector('.switch-mode-btn');

const body = document.querySelector('body');

const switchMode = () => {
    
    body.classList.toggle('body-bg-dark');
    switchBtn.classList.toggle('switch-mode-btn-dark');

    if (body.classList.contains('body-bg-dark')) {
        switchBtn.innerHTML = 'light <img src="assets/icon-sun.svg" alt="icon-sun" class="mode-icon">';
        
    } else {
        switchBtn.innerHTML = 'dark <img src="assets/icon-moon.svg" alt="icon-moon" class="mode-icon">';
    }

}

switchBtn.addEventListener('click',switchMode);