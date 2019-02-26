const API_URL = "https://api.unsplash.com/search/photos/?client_id=7a2b57ffe1e87642ab46b8bf932be06f66f16dac9b6e6a1d9d68aeea0ffd1e73"

export default {
    search(searchTerm) {
        const url = `${API_URL}&query=${searchTerm}`
        //imageSection.innerHTML = '';
        //loadingImage.style.display = '';
        //console.log(url)
        return fetch(url) //returns a promisse
            .then(response => response.json())
            .then(result => {
                //console.log(result.results)
                return result.results;
            })
    }
}