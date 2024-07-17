const accessKey = 'CAPUA7aowuy7URhf3EUjeS_OuSMxWd5YS3Mg8PafuQs';
const searchForm = document.querySelector('form');
const imagesContainer = document.querySelector('.images-container');
const searchInput = document.querySelector('.search-input');

const fetchImages = async (query) => {
    imagesContainer.innerHTML = '';
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=27&client_id=${accessKey}`;
    const response =  await fetch(url);
    const data = await response.json();

    data.results.forEach(photo => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML = `<img src="${photo.urls.regular}">`;

        imagesContainer.appendChild(imageElement);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText !== '')
    {
        fetchImages(inputText);
    }
    else
    {
        imagesContainer.innerHTML = `<h2>Please enter a search query</h2>`;
    }
});

