function loadAlbume() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbume(data));
}

loadAlbume()

function displayAlbume(albums) {
    const albumsContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumsContainer.appendChild(p);
    }
}

