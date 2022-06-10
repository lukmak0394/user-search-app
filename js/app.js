const github = new Github;

const searchBtn = document.querySelector('.search-btn');
const username = document.querySelector('.username');

searchBtn.addEventListener('click',() => {

    // Alternative way of getting data: 
    // fetch(`https://api.github.com/users/${username}?client_id=${'9621b9f70a31b3600321'}&client_secret=${'e2aafb7f272105dacd58489c8457f12df0063229'}`)
    // .then (res => res.json())
    // .then (data => console.log(data))


    if (username.value !== '') {
        github.getUsers(username.value)
        .then (data => {
            console.log(data)
        })
        
        
    }

})