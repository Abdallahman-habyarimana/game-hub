import useGenres from '../hooks/useGenre'

const GenreList = () => {
    const { data } = useGenres()
  return (
    <>
    {data.map(genre => (
        <ul key={genre.id}>
            <li>{genre.name}</li>
        </ul>
    ))}
    </>
  )
}

export default GenreList