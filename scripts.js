document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.png' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.png' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.png' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.png' },
        { name: 'Gustavo Lima', image: './img/artista-gustavo-limma.png' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.png' }
    ];

    const albumsData = [
        {
            name: 'White Noise (Sleep & Relaxation Sounds)',
            artist: 'Sleepy John',
            image: './img/album-white-noise.png'
        },
        {
            name: 'O Céu Explica Tudo (Ao Vivo)',
            artist: 'Henrique & Juliano',
            image: './img/album-ceu-explica.png'
        },
        {
            name: 'Nada como um dia após o outro',
            artist: 'Racionais',
            image: './img/album-vida-loka.png'
        },
        {
            name: 'HIT ME HARD AND SOFT',
            artist: 'Billie Eilish',
            image: './img/album-hit-me.png'
        },
        {
            name: 'CAJU',
            artist: 'Liker',
            image: './img/album-caju.png'
        },
        {
            name: 'Escândalo Íntimo',
            artist: 'Luísa Sonza',
            image: './img/album-escandalo.png'
        }
    ];

    const artistsGrid = document.querySelector('.artists-grid');
    const albunsGrid = document.querySelector('.albuns-grid');

    // Renderizar artistas
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `;

        artistsGrid.appendChild(artistCard);
    });

    // Renderizar álbuns
    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="Capa do álbum ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;

        albunsGrid.appendChild(albumCard);
    });

   

});

