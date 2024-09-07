import getData from './dataApi.mjs';


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const movieData = await getData();

        if (movieData.Response === "True") {
        displayMovies(movieData.Search);
        } else {
        document.getElementById('results').innerHTML = `<p>${movieData.Error}</p>`;
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
});
function displayMovies(movies) {
    const resultsContainer = document.querySelector('.container-result');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const cardResult = document.createElement('div');
        cardResult.classList.add('card-result');
        cardResult.innerHTML = `
        <div class="card-header">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <div class="card-body">
            <h3>${movie.Title}</h3>
            <p>${movie.Type}
            <p>${movie.Year}</p>
        </div>
        <button>show details</button>
        </div>  
        `;

        resultsContainer.appendChild(cardResult);
    });
}

async function searchMovies(){
    const searchInput = document.getElementById('search');
    const searchValue = searchInput.value;
    console.log(searchValue);
    const data = await getData(searchValue);
    displayMovies(data.Search);
}


document.querySelector('#search').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        searchMovies();
    }
});