export {createContent}

const searchBtn = document.querySelector('.search-btn');
const username = document.querySelector('.username');
const errorMsg = document.querySelector('.error-msg');
const output = document.querySelector('.output-wrapper');


const preloader = () => {
    output.innerHTML = '<img src="./assets/preloader.gif" alt="preloader" class="preloader">';
}

const createContent = (userData) => {
    output.innerHTML = `
        <div class="basic-info-wrapper">
            <img src="${userData.avatar_url}" alt="user-avatar" class="avatar">
            <div class="basic-info">
                <h1 class="login">${userData.name ? userData.name : userData.login}</h1>
                <p class="created-at">Joined at ${new Date(userData.created_at).toLocaleDateString()}</p>
                <a href="${userData.html_url}" target="_blank" class="user-link">@${userData.login}</a>
            </div>
                <div class="bio">${userData.bio ? userData.bio : 'This profile has no bio'}</div>
        </div>
        <div class="stats">
            <p class="stat repos">Repos<br><span class="stat-number">${userData.public_repos}</span></p>
            <p class="stat followers">Followers<br><span class="stat-number">${userData.followers}</span></p>
            <p class="stat following">Following<br><span class="stat-number">${userData.following}</span></p>
        </div> 
        <div class="aside-info">
        <p class="info location">
          <img src="/assets/icon-location.svg" alt="location-icon" class="icon">${userData.location ? userData.location : '<span class="not-available">Not Available</span>'}
        </p>
        <a href="https://twitter.com/${userData.twitter_username}" class="info twitter">
          <img src="/assets/icon-twitter.svg" alt="twitter-icon" class="icon">${userData.twitter_username ? userData.twitter_username : '<span class="not-available">Not Available</span>'}
        </a>
        <a href="${userData.blog}" class="info blog">
          <img src="/assets/icon-website.svg" alt="blog-icon" class="icon">${userData.blog ? userData.blog : '<span class="not-available">Not Available</span>'}
        </a>
        <p href="#" class="info company">
          <img src="/assets/icon-company.svg" alt="location-company" class="icon">${userData.company ? userData.company : '<span class="not-available">Not Available</span>'}
        </p>
      </div>
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
        preloader();
        setTimeout(getData,2000);
    }
})

