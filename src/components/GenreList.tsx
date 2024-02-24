
import React from 'react'
import useGenres from '../hooks/useGenre'

const GenreList = () => {
    const { genres } = useGenres()
  return (
    <>
    {genres.map(genre => (
        <ul key={genre.id}>
            <li>{genre.name}</li>
        </ul>
    ))}
    </>
  )
}

export default GenreList