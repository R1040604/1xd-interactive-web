/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \//_____/      \/ 
*/

// 1 - click on the button, then add your name to localstorage in the key "myName"
document.getElementById('addNameButton').addEventListener('click', function() {
     localStorage.setItem('myName', 'Sarah');
 });
 
 // 2 - click on the button to read the value of "myName" from localstorage and display it in span#myName
 document.getElementById('readNameButton').addEventListener('click', function() {
     const name = localStorage.getItem('myName');
     document.getElementById('myName').textContent = name;
 });
 
 // 3 - click on remove button to remove "myName" from localstorage
 document.getElementById('removeNameButton').addEventListener('click', function() {
     localStorage.removeItem('myName');
 });
 
 // 4 - click on the button to add a movie to the localstorage in the key "movies", show movies in the ul#movieList
 document.getElementById('addMovieButton').addEventListener('click', function() {
     const movie = prompt('Enter a movie name:');
     let movies = JSON.parse(localStorage.getItem('movies')) || [];
     movies.push(movie);
     localStorage.setItem('movies', JSON.stringify(movies));
     displayMovies();
 });
 
 function displayMovies() {
     const movies = JSON.parse(localStorage.getItem('movies')) || [];
     const movieList = document.getElementById('movieList');
     movieList.innerHTML = '';
     movies.forEach(function(movie) {
         const li = document.createElement('li');
         li.textContent = movie;
         movieList.appendChild(li);
     });
 }
 
 // Initial display of movies
 displayMovies();