
import { useState, useEffect } from 'react'
import apiClient from '../services/api-client';
import useGames from '../hooks/useGames';



const GameGrid = () => {
    const { games } = useGames()
  return (
    <ul>
        { games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameGrid