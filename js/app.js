import { Github } from "./github.js";
import { body, addClasses } from "./main.js";

const searchBtn = document.querySelector('.search-btn');
const username = document.querySelector('.username');
const output = document.querySelector('.output-wrapper');
const errorMsg = document.querySelector('.error-msg');

const preloader = () => {
    output.innerHTML = '<img src="../assets/preloader.gif" alt="preloader" class="preloader">';
}

const getData = () => {

    const github = new Github;

    github.getUsers(username.value)
    .then (data => {
        if (data.profile.message === "Not Found") {
            errorMsg.classList.remove('no-show');
            output.innerHTML = '';
        } else {
            errorMsg.classList.add('no-show');
            output.innerHTML = `
                <div class="basic-info-wrapper">
                    <img src="${data.profile.avatar_url}" alt="user-avatar" class="avatar">
                    <div class="basic-info">
                        <h1 class="login">${data.profile.login}</h1>
                        <p class="created-at">Joined at ${new Date(data.profile.created_at).toLocaleDateString()}</p>
                        <a href="${data.profile.html_url}" target="_blank" class="user-link">@${data.profile.login}</a>
                    </div>
                        <div class="bio">${data.profile.bio ? data.profile.bio : 'This profile has no bio'}</div>
                </div>
            `;

            if (body.classList.contains('body-bg-dark')) {
                addClasses();
            }
        }
    })
    .catch(error => {
        console.log(error)
        output.innerHTML = `<p>Couldn't load user data</p>`;
    })

}

searchBtn.addEventListener('click',() => {
    if (username.value !== '') {
        errorMsg.classList.add('no-show');
        preloader()
        setTimeout(getData,2000)
    }
})

