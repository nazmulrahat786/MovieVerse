import Swal from "sweetalert2";

const getAllMovies = () => {
  const movies = localStorage.getItem("movies");
  return movies ? JSON.parse(movies) : [];
};

const saveMovies = (id) => {
  const movies = getAllMovies();

  if (movies.includes(id)) {
    Swal.fire({
      icon: "info",
      title: "Already Added",
      text: "This movie is already in your list!",
    });
    return;
  }

  movies.push(id);
  localStorage.setItem("movies", JSON.stringify(movies));

  Swal.fire({
    icon: "success",
    title: "Added!",
    text: "Movie added successfully.",
    timer: 1500,
    showConfirmButton: false,
  });
};

export { getAllMovies, saveMovies };