import { createContent } from "./app.js";

const body = document.querySelector('body');
const switchBtn = document.querySelector('.switch-mode-btn');
const info = document.querySelector('.info');

let mode = null;

window.onload = () => {

    mode = localStorage.getItem('modeType');

    if (mode === 'dark') {
        body.classList.add('dark-mode');
        switchBtn.innerHTML = 'light <img src="assets/icon-sun.svg" alt="icon-sun" class="mode-icon">';
    } 

    fetch(`https://api.github.com/users/octocat`)
    .then (res => res.json())
    .then (data => {
        createContent(data)
    })
    .catch(error => {
        console.log(error)
        document.querySelector('.output-wrapper').innerHTML = `<p>Couldn't load user data</p>`;
    })

}

const toggleClasses = () => {

    body.classList.toggle('dark-mode') ;
    
}




const switchMode = () => {

    toggleClasses();

    if (body.classList.contains('dark-mode')) {
        switchBtn.innerHTML = 'light <img src="assets/icon-sun.svg" alt="icon-sun" class="mode-icon">';
        mode = localStorage.setItem('modeType','dark');
    } else {
        switchBtn.innerHTML = 'dark <img src="assets/icon-moon.svg" alt="icon-moon" class="mode-icon">';
        mode = localStorage.setItem('modeType','default');
    }

}

switchBtn.addEventListener('click',switchMode);



