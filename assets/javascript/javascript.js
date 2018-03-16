$(document).ready(function() {
  $('#searchedFor').hide();
    $('#movie_search').on('submit', function(event) {
      event.preventDefault();
        var searched = ($('#searchText').val());
        MovieSearch(searched);
        $('#searchText').val('');

    });
});

var MovieSearch = function(searched) {
  $('#searchedFor').show();
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
            <img class="posterimage" src="${movie.Poster}">
            <h5 class="postername">${movie.Title}</h5>
            <a onclick="movieSelected('${movie.imdbID}')" class="moreinfo" href="#">More Info</a>
          </div>
        </div>
      `;
    });

    $('#movie-list').html(output);
    $('#searchedFor').html('<h2 class ="searchtext">Search Results for:<br>' + searched);
    // sessionStorage.setItem('searchedM', searched);
    
    console.log(searched);
  })
};   

// function searchedMovie(searched) {
//     var mID = sessionStorage.getItem('searchedM')
//     axios.get("https://www.omdbapi.com/?apikey=trilogy&t=" + searched)
//     .then(function(response) {
//     console.log(response);
//     });
// }

function movieSelected(Info) {
    sessionStorage.setItem('mID', Info);
    window.location = 'movie.html';
    return false;
}

function movieChosen() {
    var mID = sessionStorage.getItem('mID')
    axios.get("https://www.omdbapi.com/?apikey=trilogy&i=" + mID)
    .then(function(response) {
    console.log(response);
    let movie = response.data;
    let output = `
    <div class="row">
    <div class="column">
    <div class="postercard">
      <img src="${movie.Poster}" class="thumbnail">
      </div>
    </div>
    <div class="infocontent">
      <h2 class="movietitle">${movie.Title}</h2>
      <ul class="listbox">
        <li class="list"><strong>Genre:</strong> ${movie.Genre}</li>
        <li class="list"><strong>Released:</strong> ${movie.Released}</li>
        <li class="list"><strong>Rated:</strong> ${movie.Rated}</li>
        <li class="list"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
        <li class="list"><strong>${movie.Ratings[1].Source}:</strong> ${movie.Ratings[1].Value}</li>
        <li class="list"><strong>${movie.Ratings[2].Source}:</strong> ${movie.Ratings[2].Value}</li>
        <li class="list"><strong>Director:</strong> ${movie.Director}</li>
        <li class="list"><strong>Writer:</strong> ${movie.Writer}</li>
        <li class="list"><strong>Actors:</strong> ${movie.Actors}</li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="row-container">
      <h2 class="contentfont">Plot</h2>
      <div class ="plottext">
      ${movie.Plot}

      <hr class="divide">
      <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="viewmore ">IMDB</a>
      <a href="https://www.google.com/search?q=${movie.Title}+trailer" target="_blank" class="trailer ">Find Trailer</a>
    </div>
    </div>
  </div>
  `;
  $('#movie').html(output);
    }); 
    
}

// var slideshow = function() {
//   $('#searchedFor').show();
//     axios.get("http://img.omdbapi.com/?apikey=trilogy&")
//     .then(function(response) {
//     console.log(response);
//     let movies = response.data.Search;
//     let output = '';
//     console.log(response.data.Search);
//     $.each(movies, function(index, movie) {
//         output += `
//         <div class="movies">
//           <div class="center">
//             <img class="posterimage" src="${movie.Poster}">
//             <h5 class="postername">${movie.Title}</h5>
//             <a onclick="movieSelected('${movie.imdbID}')" class="moreinfo" href="#">More Info</a>
//           </div>
//         </div>
//       `;
//     });

//     $('#movie-list').html(output);
//     $('#searchedFor').html('<h2 class ="searchtext">Search Results for:<br>' + searched);
//     // sessionStorage.setItem('searchedM', searched);
//     console.log(searched);
//   })
// };   

// function SeachedMovies() {
//   $('#searchedFor').show();
//   var mID = sessionStorage.getItem('sMovie')
//     axios.get("https://www.omdbapi.com/?apikey=trilogy&s=" + sMovie)
//     .then(function(response) {
//     console.log(response);
//     let movies = response.data.Search;
//     let output = `
//         <div class="movies">
//           <div class="center">
//             <img class="posterimage" src="${movie.Poster}">
//             <h5 class="postername">${movie.Title}</h5>
//             <a onclick="movieSelected('${movie.imdbID}')" class="moreinfo" href="#">More Info</a>
//           </div>
//         </div>
//       `;
//     });
//     $('#movie-list').html(output);
//     $('#searchedFor').html('<h2 class ="searchtext">Search Results for:<br>' + searched);
// };   