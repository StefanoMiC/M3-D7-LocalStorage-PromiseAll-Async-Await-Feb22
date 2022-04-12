const getMovies = () => {
  fetch("http://whatever.com/movies/18299019")
    .then(resp => resp.json())
    .then(movie => console.log(movie));
};

const person = {
  name: "John",
  surname: "Doe",
  age: 44,
  location: { continent: "North America", country: "USA" },
  profession: "Full Stack Developer",
};

// you can extract the property values and have them inside variables with the same name as the properties:
const {
  name,
  surname,
  age,
  location: { continent, country },
  profession,
} = person;
// now you can use these variables to read up the values with no prefix

const getPerson = ({ name, surname, age }) => {
  console.log(name); // John
  console.log(surname); // Doe
  console.log(age); // 44
};
