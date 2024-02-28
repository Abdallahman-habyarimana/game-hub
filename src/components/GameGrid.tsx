

import useGames, { Platform } from '../hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';
import { GameQuery } from '../App';
const skeletons = [1,2,3,4,5,6]

interface Props {
  gameQuery: GameQuery
}


const GameGrid = ({ gameQuery } : Props) => {
    const { data: games, isLoading, error } = useGames(gameQuery)

    if(error) return <Text>{error}</Text>
  return (
    
      <SimpleGrid columns={{
        sm: 1,
        md: 2, 
        lg: 3,
        xl: 4
      }} spacing={6} p='10px' >
        {isLoading && skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton  />
          </GameCardContainer>
        ))}
        { games.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game}/>
          </GameCardContainer>
        )
          )}
      </SimpleGrid>
   
  )
}

export default GameGrid