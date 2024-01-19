import useGenres from "../Hooks/useGenres";

const GenreList = () => {
  const { genre } = useGenres();
  return (
    <ul>
      {genre.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
