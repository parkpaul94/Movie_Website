$(document).ready(function() {
    // $('.navsearch').hide();
    $('#movie_search').on('submit', function(event) {
        $('.searchcc').hide();
        // $('.navsearch').show();
        var searched = ($('#searchText').val());
        MovieSearch(searched);
        event.preventDefault();
    });
});




var MovieSearch = function(searched) {
    axios.get("https://www.omdbapi.com/?apikey=trilogy&s=" + searched)
    .then(function(response) {
    console.log(response);
    let movies = response.data.Search;
    let output = '';
    console.log(response.data.Search);
    $.each(movies, function(index, movie) {
        output += `
        <div class="movies">
          <div class="center">
            <img src="${movie.Poster}">
            <h5>${movie.Title}</h5>
            <a onclick="movieSelected('${movie.imdbID}')" class="moreinfo" href="#">More Info</a>
          </div>
        </div>
      `;
    });

    $('#movie-list').html(output);
  })
  .catch((err) => {
    console.log(err);
  });
};   
