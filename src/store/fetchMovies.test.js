import { getMovies } from "../pages/MovieListPage";

test("The correct number of movies are fetched", () => {
  const tests = [
    {
      searchValue: "toast",
      pageNumber: 1,
      shouldReturn: {
        Search: [
          {
            Title: "Toast",
            Year: "2010",
            imdbID: "tt1658851",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMjAxNTIzMjA2NF5BMl5BanBnXkFtZTcwNDQ5ODIxNw@@._V1_SX300.jpg",
          },
          {
            Title: "The Toast of New York",
            Year: "1937",
            imdbID: "tt0029675",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BM2NlZWQxZjEtOWJjNy00NDZkLWJjMGMtMmNjYTJjZDg1M2EyXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg",
          },
          {
            Title: "The Toast of New Orleans",
            Year: "1950",
            imdbID: "tt0043053",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BZmU4MjY0MDQtMDhmMS00N2NmLWI2ZDUtOWZkZDY3NDUwYmQzXkEyXkFqcGdeQXVyNjA2ODA0Nzc@._V1_SX300.jpg",
          },
          {
            Title: "Rip's Toast",
            Year: "1896",
            imdbID: "tt0000111",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMDUyMzcxN2ItZWYxOS00ZDE0LTkwYjAtNjFiMDVmYWY1YWU5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
          },
          {
            Title: "Rip's Toast to Hudson",
            Year: "1896",
            imdbID: "tt0000112",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BZTkwNzFjYjUtNDhkMi00MWU4LThlZjktY2I4ZTUxYzU0OTZhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
          },
          {
            Title: "French Toast",
            Year: "2015",
            imdbID: "tt5000984",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BN2Y3MjVhNzgtNzQ4ZC00NjViLTlmYTAtZDhlZmE3MDlkZjg4XkEyXkFqcGdeQXVyNTc3NjA4MDk@._V1_SX300.jpg",
          },
          {
            Title: "Burnt Toast",
            Year: "2005",
            imdbID: "tt0457559",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMjI5ZWE2ZDItN2FjMS00YWZiLWEzMjUtYjM2ZDM5YjYxMzI3XkEyXkFqcGdeQXVyMTEwMTc3Nzg3._V1_SX300.jpg",
          },
          {
            Title: "Long Toast",
            Year: "2020",
            imdbID: "tt13676248",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BZGViNjliMGItYjY2ZS00OTY2LWEzOWEtYTllYjA2Mjk1YjM4XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg",
          },
          {
            Title: "An All-Star Toast to the Improv",
            Year: "1988",
            imdbID: "tt0094634",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOTdjNWZjZjEtZWUzOC00NWMzLThhOWYtYmE4NDgxOTNiM2FhXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg",
          },
          {
            Title: "Hey Amigo! A Toast to Your Death",
            Year: "1970",
            imdbID: "tt0279060",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BYWVlYjYxNzAtNjdkZi00YzcwLTg1MzktZWQ3YmQzM2I1MzhlXkEyXkFqcGdeQXVyNjUzNzQ4NDQ@._V1_SX300.jpg",
          },
        ],
        totalResults: "134",
        Response: "True",
      },
    },
  ];

  tests.forEach(({ searchValue, pageNumber }) => {
    expect(getMovies(searchValue, pageNumber)).toEqual(shouldReturn);
  });
});
