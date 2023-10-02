/*
const person = [
  {
    name: "Mustafa",
    age: 44,
    city: "Salmiya",
  },
  {
    name: "Burhannuddin",
    age: 44,
    city: "Salmiya",
  },
  {
    name: "Farida",
    age: 44,
    city: "Salmiya",
  },
];

// function details = ()
person.forEach((detail) =>
  console.log(`

  Name: ${detail.name}
  Age : ${detail.age}
  City: ${detail.city}
  `)
);
*/
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
// function movieTitle(x) {
//   console.log(x.title);
// }
function movieTitles(movies) {
  movies.forEach((movieTitle) => console.log(movieTitle.title));
}
movieTitles(movies);
// console.log(movieTitles);

/******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
// function filterYear(x) {
//   return x.year == 1994;
// }
// let filtered = movies.filter(filterYear);
// // console.log(filtered);
