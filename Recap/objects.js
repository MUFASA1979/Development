const p1 = { name: "John", age: 25 };
function hasKey(obj, key) {
  if (obj[key]) return true;
  else return false;
}
hasKey(p1, "age");

// 6

function filterYear(X) {
  return X.year == 1994;
}
let filtered = movies.filter(filterYear);

// 7
function updateName(arr) {
  const newArray = arr.map((x) => {
    if (x.title == "the Dark Knight") {
      x.genre = "Action/Drama";
    }
    return x;
  });
  return newArray;
}
updateName(movies);

//objects 2
// Q5

// Question 5: 🌶️🌶️
//   listAllCourses(students):
//   - recieves an array of student objects
//   - returns an array of all unique course names across all students
// 	===
// 	ANSWER:
// 	[
// 	  'Math',    'Science',
// 	  'History', 'English',
// 	  'Art',     'Music',
// 	  'PE'
// 	]
//   **********/
function listAllCourses(students) {
  let unique = [];
  students.forEach((x) => {
    return;
  });
}
console.log(listAllCourses(students));

//includes will check and segregate the value available
// ! sign will flip the answer

return channels.find((channel) => {
  return channel.videos.find((video) => {
    return video.title == videoTitle;
  });
});
