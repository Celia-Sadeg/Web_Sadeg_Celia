document.addEventListener('DOMContentLoaded', () => {
    const videoList = document.getElementById('video-list');
    const categories = document.querySelectorAll('.category');

    const videos = {
        math: [
            { title: "Introduction aux Algebra", url: "https://www.youtube.com/watch?v=example1" },
            { title: "Les Fonctions Quadratiques", url: "https://www.youtube.com/watch?v=example2" }
        ],
        science: [
            { title: "Les Lois de la Thermodynamique", url: "https://www.youtube.com/watch?v=example3" },
            { title: "Introduction à la Biologie Cellulaire", url: "https://www.youtube.com/watch?v=example4" }
        ],
        history: [
            { title: "La Révolution Française", url: "https://www.youtube.com/watch?v=example5" },
            { title: "La Seconde Guerre Mondiale", url: "https://www.youtube.com/watch?v=example6" }
        ]
    };

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryType = category.getAttribute('data-category');
            displayVideos(categoryType);
        });
    });

    function displayVideos(category) {
        videoList.innerHTML = ''; // Clear previous videos
        const videosToDisplay = videos[category] || [];

        videosToDisplay.forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.className = 'video';
            videoDiv.innerHTML = `
                <h3>${video.title}</h3>
                <a href="${video.url}" target="_blank">Regarder la vidéo</a>
            `;
            videoList.appendChild(videoDiv);
        });
    }
});
