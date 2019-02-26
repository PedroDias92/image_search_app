const API_URL = "https://api.unsplash.com/search/photos/?client_id=7a2b57ffe1e87642ab46b8bf932be06f66f16dac9b6e6a1d9d68aeea0ffd1e73"
const form = document.querySelector('form');
const input = document.querySelector('input');
const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('.images');


loadingImage.style.display = 'none';
form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
    event.preventDefault();
    //console.log(event)
    const searchTerm = input.value;
    //console.log(searchTerm);
    search(searchTerm)
        .then(displayImages)
}

function search(searchTerm) {
    const url = `${API_URL}&query=${searchTerm}`
    imageSection.innerHTML='';
    loadingImage.style.display = '';
    //console.log(url)
    return fetch(url)  //returns a promisse
        .then(response => response.json())
        .then(result => {
            //console.log(result)
            return result.results;
        })

    
}

function displayImages(images) {
    images.forEach(image => {
        console.log(image.urls.small);
        const imageElement = document.createElement('img');
        const s = document.createElement('br');
        imageElement.src=image.urls.small; //full
        imageElement.alt='';
        console.log(imageElement)
        imageSection.appendChild(imageElement);
        
    });
    loadingImage.style.display = 'none';
}