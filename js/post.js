function lodePosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
lodePosts();

function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p> ${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post);
    }

}

/* 

//own try
// get api data
function lodePosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
lodePosts();
function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <p>${post.id}</p>
            <h2>${post.title}</h2>
            <p> ${post.body} </p>
        `;
        postContainer.appendChild(div);
        console.log(post);

    }

} 

*/