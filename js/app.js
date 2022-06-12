export {createContent}

const searchBtn = document.querySelector('.search-btn');
const errorMsg = document.querySelector('.error-msg');
const output = document.querySelector('.output-wrapper');

const preloader = () => {
    output.innerHTML = '<img src="../assets/preloader.gif" alt="preloader" class="preloader">';
}

const createContent = (user) => {
    output.innerHTML = `
        <div class="basic-info-wrapper">
            <img src="${user.avatar_url}" alt="user-avatar" class="avatar">
            <div class="basic-info">
                <h1 class="login">${user.name ? user.name : user.login}</h1>
                <p class="created-at">Joined at ${new Date(user.created_at).toLocaleDateString()}</p>
                <a href="${user.html_url}" target="_blank" class="user-link">@${user.login}</a>
            </div>
                <div class="bio">${user.bio ? user.bio : 'This profile has no bio'}</div>
        </div>
        <div class="stats">
            <p class="stat repos">Repos<br><span class="stat-number">${user.public_repos}</span></p>
            <p class="stat followers">Followers<br><span class="stat-number">${user.followers}</span></p>
            <p class="stat following">Following<br><span class="stat-number">${user.following}</span></p>
        </div> 
    `;
}

const getData = () => {

    fetch(`https://api.github.com/users/${username.value}`)
    .then (res => res.json())
    .then (data => {
        
        if (data.message === "Not Found") {
            errorMsg.classList.remove('no-show');
            output.innerHTML = '';
        } else {
            errorMsg.classList.add('no-show');
            createContent(data)
        }
    })
    .catch(error => {
        console.log(error)
        output.innerHTML = `<p>Couldn't load user data</p>`;
    })

    

}

searchBtn.addEventListener('click',() => {
    if (username.value !== '') {
        preloader()
        setTimeout(getData,2000)
    }
})

